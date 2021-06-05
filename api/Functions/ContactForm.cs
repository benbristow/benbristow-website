using System.Linq;
using System.Threading.Tasks;
using BenBristow.Api.BindingModels;
using BenBristow.Api.Extensions;
using BenBristow.Api.ViewModels;
using FluentEmail.Core;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;

namespace BenBristow.Api.Functions
{
    public class ContactForm
    {
        private readonly IFluentEmail _fluentEmail;
        private readonly IValidator<ContactFormBindingModel> _validator;

        public ContactForm(
            IFluentEmail fluentEmail,
            IValidator<ContactFormBindingModel> validator)
        {
            _fluentEmail = fluentEmail;
            _validator = validator;
        }

        [FunctionName(nameof(ContactForm))]
        public async Task<IActionResult> RunAsync(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)]
            HttpRequest req)
        {
            var bindingModel = await req.DeserializeBodyAsync<ContactFormBindingModel>();

            var validationResult = await _validator.ValidateAsync(bindingModel);
            if (!validationResult.IsValid)
            {
                return new BadRequestObjectResult(
                    new ContactFormResponseViewModel(validationResult.Errors.First().ErrorMessage));
            }

            await _fluentEmail
                .SetFrom(Constants.Email.FromEmail, bindingModel.Name)
                .To("ben@bristow.me", "Ben Bristow")
                .ReplyTo(bindingModel.Email)
                .Subject($"Contact form submission from {bindingModel.Name}")
                .Body(bindingModel.Message)
                .SendAsync();

            return new OkObjectResult(new ContactFormResponseViewModel());
        }
    }
}