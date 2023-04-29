using BusReservation.Data.UnitOfWork;
using BusReservation.Models.Entities;
using BusReservation.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BusReservation.Services.Implementations
{
    public class ReservationService : IReservationService
    {
        private readonly IUnitOfWork _unitOfWork;
        
        public ReservationService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<Reservation> GetByIdAsync(int id)
        {
            var reservation = await _unitOfWork.ReservationRepository
                                                         .GetById(a => a.Id == id)
                                                         .FirstOrDefaultAsync();
            return reservation;
        }
    }
}
