using BusReservation.Models.Entities;

namespace BusReservation.Services.Interfaces
{
    public interface IReservationService
    {
        Task<Reservation> GetByIdAsync(int id);
    }
}
