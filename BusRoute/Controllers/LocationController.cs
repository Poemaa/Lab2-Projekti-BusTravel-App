using BusRoute.Models.Entities;
using BusRoute.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

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

            [HttpGet("{id:int}")]
            public async Task<IActionResult> GetLocationByIdAsync(int id)
            {
                var location = await _locationService.GetByIdAsync(id);
                return location != null ? Ok(location) : NotFound();
            }


        }
    }
