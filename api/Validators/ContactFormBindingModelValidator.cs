using BasicCaptcha.Contracts;
using BenBristow.Api.BindingModels;
using FluentValidation;

namespace BenBristow.Api.Validators
{
    public class ContactFormBindingModelValidator : AbstractValidator<ContactFormBindingModel>
    {
        public ContactFormBindingModelValidator(
            ICaptchaService captchaService)
        {
            RuleFor(x => x.Email)
                .EmailAddress()
                .WithMessage("Please provide a valid email (or else I can't reply to you!)");

            RuleFor(x => x.Message)
                .NotEmpty()
                .WithMessage("Please provide a message");

            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage("Please provide your name");

            RuleFor(x => x.RecaptchaCode)
                .Cascade(CascadeMode.Stop)
                .NotEmpty()
                .WithMessage("Please complete the ReCAPTCHA challenge")
                .MustAsync((x, _) => captchaService.VerifyToken(x))
                .WithMessage("ReCAPTCHA response invalid");
        }
    }
}