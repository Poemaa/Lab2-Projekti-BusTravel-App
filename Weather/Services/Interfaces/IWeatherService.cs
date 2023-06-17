namespace Weather.Services.Interfaces
{
    public interface IWeatherService
    {
        Task<Weather.Models.Entities.Weather> GetWeatherByCoordinates(double latitude, double longitude);
    }
}
