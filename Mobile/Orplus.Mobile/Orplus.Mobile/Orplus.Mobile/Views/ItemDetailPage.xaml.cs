using System.ComponentModel;
using Xamarin.Forms;
using Orplus.Mobile.ViewModels;

namespace Orplus.Mobile.Views
{
    public partial class ItemDetailPage : ContentPage
    {
        public ItemDetailPage()
        {
            InitializeComponent();
            BindingContext = new ItemDetailViewModel();
        }
    }
}