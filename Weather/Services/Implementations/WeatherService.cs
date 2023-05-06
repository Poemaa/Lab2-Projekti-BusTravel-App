using Weather.Services.Interfaces;

namespace Weather.Services.Implementations
{
    public class WeatherService : IWeatherService
    {
        public WeatherService() { }

        public Task<Models.Entities.Weather> GetByWeatherByCityIdAsync(int cityId)
        {
            throw new NotImplementedException(); // todo
        }
    }
}
