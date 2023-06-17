using Microsoft.AspNetCore.Mvc;
using Weather.Services.Interfaces;

namespace Weather.Controllers
{
    [Route("api/weather")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        private readonly IWeatherService _weatherService;

        public WeatherController(IWeatherService weatherService)
        {
            _weatherService = weatherService;
        }

        [HttpGet]
        public async Task<IActionResult> GetWeatherByCoordinates(double latitude, double longitude)
        {
            var weather = await _weatherService.GetWeatherByCoordinates(latitude, longitude);
            return weather != null ? Ok(weather) : NotFound();
        }
    }
}