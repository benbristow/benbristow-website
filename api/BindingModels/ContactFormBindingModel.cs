namespace BenBristow.Api.BindingModels
{
    public class ContactFormBindingModel
    {
        public string Email { get; set; }

        public string Name { get; set; }

        public string Message { get; set; }

        public string RecaptchaCode { get; set; }
    }
}