using BusReservation.Models.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

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

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> MakeReservation(int BusRouteId)
        {
            var identity = User.Identity as ClaimsIdentity;
            var email = identity.FindFirst(ClaimTypes.Email)?.Value;
            var firstName = identity.FindFirst(ClaimTypes.GivenName)?.Value;
            var lastName = identity.FindFirst(ClaimTypes.Name)?.Value;

            ReservationDTO reservationToMake = new ReservationDTO()
            {
                BusRouteId = BusRouteId,
                UserEmail = email,
                Username = firstName + " " + lastName,
            };
            await _reservationService.MakeReservationAsync(reservationToMake);
            return Ok(reservationToMake);
        }

        [Authorize]
        [HttpDelete]
        public async Task<IActionResult> DeleteReservation(int reservationId)
        {
            var deleted = await _reservationService.DeleteReservation(reservationId);
            return deleted != null ? Ok("Reservation deleted") : BadRequest();
        }
    }
}
