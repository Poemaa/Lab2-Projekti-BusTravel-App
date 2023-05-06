namespace Weather.Services.Interfaces
{
    public interface IWeatherService
    {
        Task<Weather.Models.Entities.Weather> GetByWeatherByCityIdAsync(int cityId);
    }
}
