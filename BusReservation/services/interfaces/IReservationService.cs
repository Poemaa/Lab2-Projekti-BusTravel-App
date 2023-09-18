using BusReservation.Models.DTOs;
using BusReservation.Models.Entities;

public interface IReservationService
{
    Task<List<Reservation>> GetAll();
    Task<Reservation> GetByIdAsync(int id);
    Task<List<Reservation>> GetByEmailAsync(string email);
    Task<bool> MakeReservationAsync(ReservationDTO reservationToMake);
    Task<bool> DeleteReservation(int reservationId);
}