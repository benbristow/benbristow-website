using Newtonsoft.Json;

namespace BenBristow.Api.ViewModels
{
    public class ContactFormResponseViewModel
    {
        public ContactFormResponseViewModel(string error)
        {
            Error = error;
            Success = false;
        }

        public ContactFormResponseViewModel()
        {
        }

        [JsonProperty]
        public string Error { get; }

        [JsonProperty]
        public bool Success { get; } = true;
    }
}