using BusRoute.Data.UnitOfWork;
using BusRoute.Models.Entities;
using BusRoute.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BusRoute.services.implementations
{
    public class LocationService : ILocationService
    {
        private readonly IUnitOfWork _unitOfWork;

        public LocationService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<Location> GetByIdAsync(int id)
        {
            var location = await _unitOfWork.LocationRepository
                                                         .GetById(a => a.LocationId == id)
                                                         .FirstOrDefaultAsync();
            return location;
        }
    }
}