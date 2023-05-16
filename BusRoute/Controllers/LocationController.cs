using BusRoute.Models.Entities;
using BusRoute.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using BusRoute.Models.DTOs;

namespace BusRoute.Controllers
{
        [Route("api/location")]
        [ApiController]
    public class LocationController : ControllerBase
    {
            private readonly ILocationService _locationService;

            public LocationController(ILocationService locationService)
            {
                _locationService = locationService;
            }

            [HttpGet("cities")]
            public async Task<IActionResult> GetAllLocations()
            {
                var locations = await _locationService.GetAllCities();
                return locations != null ? Ok(locations) : NotFound();
            }

            [HttpGet("city/{id:int}")]
            public async Task<IActionResult> GetLocationByIdAsync(int id)
            {
                var location = await _locationService.GetByIdAsync(id);
                return location != null ? Ok(location) : NotFound();
            }

            [HttpPost("city")]
            public async Task<IActionResult> AddCity(string cityName)
            {
                var created = await _locationService.AddCity(cityName);
                return created != null ? Ok("City created") : BadRequest();
            }

            [HttpDelete("city/{cityId:int}")]
            public async Task<IActionResult> DeleteCityById(int cityId)
            {
                var deleted = await _locationService.DeleteCity(cityId);
                return deleted != null ? Ok("City deleted") : BadRequest();
            }

            [HttpPut("city")]
            public async Task<IActionResult> EditCity([FromForm] LocationDTO location)
            {
                var edited = await _locationService.EditCity(location);
                return edited != null ? Ok("City edited successfully") : BadRequest();
            }

        }
    }
