using BusReservation.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BusReservation.Controllers
{
    [Route("api/reservations")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private readonly IReservationService _reservationService;

        public ReservationController(IReservationService reservationService)
        {
            _reservationService = reservationService;
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetReservationByIdAsync(int id)
        {
            var reservation = await _reservationService.GetByIdAsync(id);
            return reservation != null ? Ok(reservation) : NotFound();
        }
    }
}
