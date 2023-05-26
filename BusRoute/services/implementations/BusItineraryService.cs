using BusRoute.Data.UnitOfWork;
using BusRoute.Models.Entities;
using BusRoute.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using BusRoute.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.CodeAnalysis;

namespace BusRoute.services.Implementations
{
    public class BusItineraryService : IBusItineraryService
    {
        private readonly IUnitOfWork _unitOfWork;

        public BusItineraryService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<List<BusItineraryDTO>> GetAllBusItineraries()
        {
            return await _unitOfWork.BusItineraryRepository.GetAll().Select(c => new BusItineraryDTO
            {
                Date = c.Date,
                DepartureTime = c.DepartureTime,
                ArrivalTime = c.ArrivalTime,
                Duration = c.Duration

            }).ToListAsync();
        }
        public async Task<BusItineraryDTO> GetByIdAsync(int id)
        {
            var busItinerary = await _unitOfWork.BusItineraryRepository
                                                         .GetById(a => a.BusItineraryId == id)
                                                         .FirstOrDefaultAsync();
            BusItineraryDTO busItinerarydto = new BusItineraryDTO
            {
                BusItineraryId = busItinerary.BusItineraryId,
                Date = busItinerary.Date,
                DepartureTime = busItinerary.DepartureTime,
                ArrivalTime = busItinerary.ArrivalTime,
                Duration = busItinerary.Duration
            };
            return busItinerarydto;
        }

        public async Task<bool> AddBusItinerary(BusItineraryDTO busItineraryDto)
        {
            BusItinerary busItinerary = new BusItinerary
            {
                Date = busItineraryDto.Date,
                DepartureTime = busItineraryDto.DepartureTime,
                ArrivalTime = busItineraryDto.ArrivalTime,
                Duration = busItineraryDto.Duration

            };
            await _unitOfWork.BusItineraryRepository.CreateAsync(busItinerary);
            return await _unitOfWork.CompleteAsync();
        }

        public async Task<bool> DeleteBusItinerary(int busItineraryId)
        {
            var busItinerary = await _unitOfWork.BusItineraryRepository.GetById(a => a.BusItineraryId == busItineraryId).FirstOrDefaultAsync();
            _unitOfWork.BusItineraryRepository.Delete(busItinerary ?? throw new InvalidOperationException());
            return await _unitOfWork.CompleteAsync();
        }

        public async Task<bool> EditBusItinerary(BusItineraryDTO busItineraryDto)
        {
            BusItinerary busItinerary = new BusItinerary
            {
                BusItineraryId = busItineraryDto.BusItineraryId,
                Date = busItineraryDto.Date,
                DepartureTime = busItineraryDto.DepartureTime,
                ArrivalTime = busItineraryDto.ArrivalTime,
                Duration = busItineraryDto.Duration

            };
            _unitOfWork.BusItineraryRepository.Update(busItinerary);
            return await _unitOfWork.CompleteAsync();
        }

    }
}
