using Newtonsoft.Json;
using Weather.Services.Interfaces;

namespace Weather.Services.Implementations
{
    public class WeatherService : IWeatherService
    {
        private readonly HttpClient _httpClient;
        public WeatherService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }
        public async Task<Models.Entities.Weather> GetWeatherByCoordinates(double latitude, double longitude)
        {
            string apiUrl = $"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&forecast_days=1&timezone=Europe%2FBerlin";

            HttpResponseMessage response = await _httpClient.GetAsync(apiUrl);
            response.EnsureSuccessStatusCode();

            string json = await response.Content.ReadAsStringAsync();
            var forecast = JsonConvert.DeserializeObject<Models.Entities.Weather>(json);

            return forecast;
        }
    }
}
