using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trial.ViewModels;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Trial.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class SigninPage : ContentPage
    {
        public SigninPage()
        {
            var vm = new SigninViewModel();
            this.BindingContext = vm;
            vm.DisplayInvalidLoginPrompt += () => DisplayAlert("Error", "Invalid Login, try again", "OK");
            InitializeComponent();

            Email.Completed += (object sender, EventArgs e) =>
            {
                Password.Focus();
            };

            Password.Completed += (object sender, EventArgs e) =>
            {
                vm.SubmitCommand.Execute(null);
            };
        }

        //async void OnSigninClicked(object sender, EventArgs e)
        //{
        //    if ( EntryUserEmail.Text == null && EntryUserPassword.Text == null)
        //    {
        //        await DisplayAlert("Log in failed", "Enter correct email and password", "Okay", "Cancel");
        //    }
        //    else
        //    {
                
        //        await Navigation.PushAsync(new MainPage());
        //    }
        //}

        async void OnRegisterClicked(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new SignupPage());
        }
    }
}