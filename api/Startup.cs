using System;
using System.Reflection;
using BasicCaptcha.Enums;
using BasicCaptcha.Extensions;
using BenBristow.Api;
using FluentValidation;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;

[assembly: FunctionsStartup(typeof(Startup))]
namespace BenBristow.Api
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddCaptcha(ExternalCaptchaProvider.GoogleRecaptcha,
                Environment.GetEnvironmentVariable("RECAPTCHA_SECRET_KEY"));

            builder.Services.AddFluentEmail(Constants.Email.FromEmail)
                .AddSendGridSender(Environment.GetEnvironmentVariable("SENDGRID_API_KEY"));

            builder.Services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}