using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Weather.Models.Entities;
using Weather.Services.Interfaces;

public class WeatherService : IWeatherService
{
    private readonly HttpClient _httpClient;

    public WeatherService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<Weather.Models.Entities.Weather> GetWeatherByCoordinates(double latitude, double longitude)
    {
        string apiUrl = $"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&forecast_days=1&timezone=Europe%2FBerlin";

        HttpResponseMessage response = await _httpClient.GetAsync(apiUrl);
        response.EnsureSuccessStatusCode();

        string json = await response.Content.ReadAsStringAsync();
        WeatherResponse weatherResponse = JsonConvert.DeserializeObject<WeatherResponse>(json);

        Weather.Models.Entities.Weather weather = new Weather.Models.Entities.Weather
        {
            Weathercode = weatherResponse.Daily.WeatherCode[0],
            MaxTemperature = weatherResponse.Daily.Temperature2mMax[0],
            MinTemperature = weatherResponse.Daily.Temperature2mMin[0]
        };

        return weather;
    }
}