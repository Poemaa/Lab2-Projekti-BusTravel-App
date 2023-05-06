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

        [HttpGet("{cityid:int}")]
        public async Task<IActionResult> GetWeatherByCityIdAsync(int cityid)
        {
            var weather = await _weatherService.GetByWeatherByCityIdAsync(cityid);
            return weather != null ? Ok(weather) : NotFound();
        }
    }
}