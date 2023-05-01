using BusRoute.Models.Entities;
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

        [HttpGet("{id:int}")]
          public async Task<IActionResult> GetBusLineByIdAsync(int id)
          {
              var busLine = await _busLineService.GetByIdAsync(id);
              return busLine != null ? Ok(busLine) : NotFound();
          }


        }
    }

