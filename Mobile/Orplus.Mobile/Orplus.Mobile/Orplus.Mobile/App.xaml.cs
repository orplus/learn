using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Orplus.Mobile.Services;
using Orplus.Mobile.Views;

namespace Orplus.Mobile
{
    public partial class App : Application
    {

        public App()
        {
            InitializeComponent();

            MainPage = new NavigationPage(new ProductIdentifierPage())
            {
                BarBackgroundColor = Color.FromHex("#000020"),
                BarTextColor = Color.White
            };
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
