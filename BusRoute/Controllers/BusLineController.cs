using BusRoute.Models.DTOs;
using BusRoute.Models.Entities;
using BusRoute.services.Implementations;
using BusRoute.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace BusRoute.Controllers
{

    [Route("api/busLines")]
    [ApiController]
    public class BusLineController : ControllerBase
    {
        private readonly IBusLineService _busLineService;

        public BusLineController(IBusLineService busLineService)
        {
            _busLineService = busLineService;
        }

        [HttpGet("busLines")]
        public async Task<IActionResult> GetAllCompanies()
        {
            var busLines = await _busLineService.GetAllBusLines();
            return busLines != null ? Ok(busLines) : NotFound();
        }

        [HttpGet("busLine/{id:int}")]
        public async Task<IActionResult> GetBusLineByIdAsync(int id)
        {
            var busLine = await _busLineService.GetByIdAsync(id);
            return busLine != null ? Ok(busLine) : NotFound();
        }

        [HttpPost("busLine")]
        public async Task<IActionResult> AddBusLine(BusLineDTO busLineDto)
        {
            var created = await _busLineService.AddBusLine(busLineDto);
            return created != null ? Ok("BusLine created") : BadRequest();
        }

        [HttpPut("busLine")]
        public async Task<IActionResult> EditBusLine([FromForm] BusLineDTO busLineDto)
        {
            var edited = await _busLineService.EditBusLine(busLineDto);
            return edited != null ? Ok("BusLine edited successfully") : BadRequest();
        }

        [HttpDelete("busLine/{busLineId:int}")]
        public async Task<IActionResult> DeleteBusLineById(int busLineId)
        {
            var deleted = await _busLineService.DeleteBusLine(busLineId);
            return deleted != null ? Ok("BusLine deleted") : BadRequest();
        }

    }
}
