using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Windows.Input;
using Trial.Helpers.Validators;
using Trial.Helpers.Validators.Rules;
using Xamarin.Forms;

namespace Trial.ViewModels
{
    public class SignupPageViewModel : INotifyPropertyChanged
    {
        public ValidatableObject<string> FirstName { get; set; } = new ValidatableObject<string>();
        public ValidatableObject<string> LastName { get; set; } = new ValidatableObject<string>();    
        public ValidatablePair<string> Email { get; set; } = new ValidatablePair<string>();
        public ValidatablePair<string> Password { get; set; } = new ValidatablePair<string>();
        public ValidatableObject<bool> TermsAndCondition { get; set; } = new ValidatableObject<bool>();

        public SignupPageViewModel()
        {
            AddValidationRules();
        }

        public void AddValidationRules()
        {
            FirstName.Validations.Add(new IsNotNullOrEmptyRule<string> { ValidationMessage = "First Name Required" });
            LastName.Validations.Add(new IsNotNullOrEmptyRule<string> { ValidationMessage = "Last Name Required" });     

            //Email Validation Rules
            Email.Item1.Validations.Add(new IsNotNullOrEmptyRule<string> { ValidationMessage = "Email Required" });
            Email.Item1.Validations.Add(new IsValidEmailRule<string> { ValidationMessage = "Invalid Email" });          

            //Password Validation Rules
            Password.Item1.Validations.Add(new IsNotNullOrEmptyRule<string> { ValidationMessage = "Password Required" });
            Password.Item1.Validations.Add(new IsValidPasswordRule<string> { ValidationMessage = "Password between 8-20 characters; must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character" });
            Password.Item2.Validations.Add(new IsNotNullOrEmptyRule<string> { ValidationMessage = "Confirm password required" });
            Password.Validations.Add(new MatchPairValidationRule<string> { ValidationMessage = "Password and confirm password don't match" });

            TermsAndCondition.Validations.Add(new IsValueTrueRule<bool> { ValidationMessage = "Please accept tems and condition" });
        }


        public ICommand SignUpCommand => new Command(async () =>
        {
            if (AreFieldsValid())
            {
                await App.Current.MainPage.DisplayAlert("Welcome", "", "Ok");
            }
        });

        bool AreFieldsValid()
        {
            bool isFirstNameValid = FirstName.Validate();
            bool isLastNameValid = LastName.Validate();
            bool isEmailValid = Email.Validate();
            bool isPasswordValid = Password.Validate();
            bool isTermsAndConditionValid = TermsAndCondition.Validate();

            return isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isTermsAndConditionValid;
        }

        public event PropertyChangedEventHandler PropertyChanged;

    }
}