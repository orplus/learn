using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Trial.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class SignupPage : ContentPage
    {
        public SignupPage()
        {
            InitializeComponent();
        }

        async void signUp_Clicked(object sender, EventArgs e)
        {
            if (EntryUserFirstName.Text == null && EntryUserLastName.Text == null && EntryUserEmail.Text == null && EntryUserPassword.Text == null)
            {
                await DisplayAlert("Registration Failed", "Enter your details", "Okay", "Cancel");
            }
            else
            {
                await DisplayAlert("Registration successful", "Thanks for using our app", "Okay", "Cancel");
                await Navigation.PushAsync(new MainPage());
            }
        }

        private async void Cancel_Clicked(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new SigninPage());
        }
    }
}