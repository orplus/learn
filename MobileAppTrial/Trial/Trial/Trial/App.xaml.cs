using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Trial.Services;
using Trial.Views;

namespace Trial
{
    public partial class App : Application
    {

        public App()
        {
            InitializeComponent();

            DependencyService.Register<MockDataStore>();
            //MainPage = new SigninPage();
            MainPage = new NavigationPage(new SigninPage());
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
