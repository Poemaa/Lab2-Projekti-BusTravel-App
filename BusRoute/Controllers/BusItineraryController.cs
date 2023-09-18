using BusRoute.Models.DTOs;
using BusRoute.Models.Entities;
using BusRoute.services.Implementations;
//using BusRoute.Services.Implementations;
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
        [HttpGet("busItineraries")]
        public async Task<IActionResult> GetAllBusItineraries()
        {
            var busItineraries = await _busItineraryService.GetAllBusItineraries();
            return busItineraries != null ? Ok(busItineraries) : NotFound();
        }

        [HttpGet("busItinerary/{id:int}")]
        public async Task<IActionResult> GetBusItineraryByIdAsync(int id)
        {
            var busItinerary = await _busItineraryService.GetByIdAsync(id);
            return busItinerary != null ? Ok(busItinerary) : NotFound();
        }

        [HttpPost("busItinerary")]
        public async Task<IActionResult> AddBusItinerary([FromBody] BusItineraryCreateDTO busItineraryDto)
        {
            var created = await _busItineraryService.AddBusItinerary(busItineraryDto);
            return created != null ? Ok("BusItinerary created") : BadRequest();
        }

        [HttpPut("busItinerary")]
        public async Task<IActionResult> EditBusItinerary([FromForm] BusItineraryToEditDTO itineraryToEdit)
        {
            var edited = await _busItineraryService.EditBusItinerary(itineraryToEdit);
            return edited != null ? Ok("BusItinerary edited successfully") : BadRequest();
        }

        [HttpDelete("busItinerary/{busItineraryId:int}")]
        public async Task<IActionResult> DeleteBusItineraryById(int busItineraryId)
        {
            var deleted = await _busItineraryService.DeleteBusItinerary(busItineraryId);
            return deleted != null ? Ok("BusItinerary deleted") : BadRequest();
        }

    }
}
