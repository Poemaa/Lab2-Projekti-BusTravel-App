using BusRoute.Data.UnitOfWork;
using BusRoute.Models.Entities;
using BusRoute.Services.Interfaces;
using Microsoft.EntityFrameworkCore;


namespace BusRoute.Services.Implementations
{
    public class BusItineraryService : IBusItineraryService
    {
        private readonly IUnitOfWork _unitOfWork;

        public BusItineraryService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<BusItinerary> GetByIdAsync(int id)
        {
            var itinerary = await _unitOfWork.BusItineraryRepository
                                                         .GetById(a => a.ItineraryId == id)
                                                         .FirstOrDefaultAsync();
            return itinerary;
        }
    }
}