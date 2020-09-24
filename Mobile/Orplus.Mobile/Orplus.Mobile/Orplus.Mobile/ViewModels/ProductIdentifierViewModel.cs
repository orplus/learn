using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Input;
using Microsoft.Cognitive.CustomVision.Prediction;
using Microsoft.Cognitive.CustomVision.Prediction.Models;
using Microsoft.Azure.CognitiveServices.Vision.CustomVision.Prediction;
using Microsoft.Azure.CognitiveServices.Vision.CustomVision.Prediction.Models;
using Plugin.Media;
using Plugin.Media.Abstractions;
using Plugin.TextToSpeech;
using Xamarin.Forms;

namespace Orplus.Mobile.ViewModels
{
    public class ProductIdentifierViewModel : ViewModelBase
    {
    
        private PredictionEndpoint _endpoint = new PredictionEndpoint { ApiKey = ApiKeys.PredictionKey };
        private const double ProbabilityThreshold = 0.5;

        public ProductIdentifierViewModel()
        {
#pragma warning disable RECS0165 // Asynchronous methods should return a Task instead of void
            TakePhotoCommand = new Command(async () => await TakePhoto());
#pragma warning restore RECS0165 // Asynchronous methods should return a Task instead of void
        }

        private async Task TakePhoto()
        {
            CanTakePhoto = false;
            await TakePhotoAndBuildProductMessage();
            CanTakePhoto = true;

            await CrossTextToSpeech.Current.Speak(ProductNameMessage);
        }

        private async Task TakePhotoAndBuildProductMessage()
        {
            var options = new StoreCameraMediaOptions { PhotoSize = PhotoSize.Medium };
            var file = await CrossMedia.Current.TakePhotoAsync(options);
            ProductNameMessage = BuildProductMessage(file);
            DeletePhoto(file);
        }

        private string BuildProductMessage(MediaFile file)
        {
            var message = "You need to photo a product";

            try
            {
                if (file != null)
                {
                    var mostLikely = GetBestTag(file);
                    if (mostLikely == null)
                        message = "I don't know who that is";
                    else
                        message = $"Hello {mostLikely.Tag}";
                }
            }
            catch
            {
                message = "I don't know who that is";
            }

            return message;
        }

        private static void DeletePhoto(MediaFile file)
        {
            var path = file?.Path;

            if (!string.IsNullOrEmpty(path) && File.Exists(path))
                File.Delete(file?.Path);
        }

        private ImageTagPredictionModel GetBestTag(MediaFile file)
        {
            using (var stream = file.GetStream())
            {
                return _endpoint.PredictImage(ApiKeys.ProjectId, stream)
                                .Predictions
                                .OrderByDescending(p => p.Probability)
                                .FirstOrDefault(p => p.Probability > ProbabilityThreshold);
            }
        }

        private string _productNameMessage = string.Empty;
        public string ProductNameMessage
        {
            get => _productNameMessage;
            set => Set(ref _productNameMessage, value);
        }

        private bool _canTakePhoto = true;
        public bool CanTakePhoto
        {
            get => _canTakePhoto;
            set
            {
                if (Set(ref _canTakePhoto, value))
                    RaisePropertyChanged(nameof(ShowSpinner));
            }
        }

        public bool ShowSpinner => !CanTakePhoto;

        public ICommand TakePhotoCommand { get; }
    }
}
