using BusRoute.Models.Entities;
using BusRoute.Services.Implementations;
using BusRoute.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace BusRoute.Controllers
{

    [Route("api/busItinerary")]
    [ApiController]
    public class BusItineraryController : ControllerBase
    {
        private readonly IBusItineraryService _busItineraryService;

        public BusItineraryController(IBusItineraryService busItineraryService)
        {
            _busItineraryService = busItineraryService;
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetBusItineraryByIdAsync(int id)
        {
            var busItinerary = await _busItineraryService.GetByIdAsync(id);
            return busItinerary != null ? Ok(busItinerary) : NotFound();
        }


    }
}
