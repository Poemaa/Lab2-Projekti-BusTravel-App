using Microsoft.AspNetCore.Mvc;

[Route("api/weather")]
[ApiController]
public class WeatherController : ControllerBase
{
    private readonly IWeatherService _weatherService;

    public WeatherController(IWeatherService weatherService)
    {
        _weatherService = weatherService;
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetWeatherByCityIdAsync(int Cityid)
    {
        var weather = await _weatherService.GetByIdAsync(id);
        return weather != null ? Ok(weather) : NotFound();
    }
}