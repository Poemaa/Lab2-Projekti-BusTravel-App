using BusReservation.Data.UnitOfWork;
using BusReservation.Models.DTOs;
using BusReservation.Models.Entities;
using Microsoft.EntityFrameworkCore;

public class ReservationService : IReservationService
{
    private readonly IUnitOfWork _unitOfWork;

    public ReservationService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<List<Reservation>> GetAll()
    {
        return await _unitOfWork.ReservationRepository.GetAll()
            .ToListAsync();
    }

    public async Task<Reservation?> GetByIdAsync(int id)
        {
            return await _unitOfWork.ReservationRepository
                                                         .GetById(a => a.ReservationId == id)
                                                         .FirstOrDefaultAsync();
        }
        public async Task<List<Reservation>> GetByEmailAsync(string email)
        {
            return await _unitOfWork.ReservationRepository
                .GetById(a => a.UserEmail == email)
                .ToListAsync();
        }
        public async Task<List<Reservation>> GetByRouteId(int routeId)
        {
            return await _unitOfWork.ReservationRepository
                .GetById(a => a.BusRouteId == routeId)
                .ToListAsync();
        }

        public async Task<bool> DeleteReservation(int reservationId)
        {
            var reservation = await _unitOfWork.ReservationRepository.GetById(a => a.ReservationId == reservationId).FirstOrDefaultAsync();
            _unitOfWork.ReservationRepository.Delete(reservation ?? throw new InvalidOperationException());
            return await _unitOfWork.CompleteAsync();
        }

        public async Task<bool> MakeReservationAsync(ReservationDTO reservationToMake)
        {
            Reservation reservation = new Reservation()
            {
                BusRouteId = reservationToMake.BusRouteId,
                UserEmail = reservationToMake.UserEmail,
                Username = reservationToMake.Username,
                Date = DateTime.Now
            };
            await _unitOfWork.ReservationRepository.CreateAsync(reservation);
            return await _unitOfWork.CompleteAsync();
        }

    
  
}

