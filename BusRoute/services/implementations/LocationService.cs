using BusRoute.Data.UnitOfWork;
using BusRoute.Models.DTOs;
using BusRoute.Models.Entities;
using BusRoute.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
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

        public async Task<List<LocationDTO>> GetAllCities()
        {
            return await _unitOfWork.LocationRepository.GetAll().Select(l => new LocationDTO
            {
                LocationId = l.LocationId,
                LocationName = l.LocationName
            }).ToListAsync();
        }
        public async Task<LocationDTO> GetByIdAsync(int id)
        {
            var location = await _unitOfWork.LocationRepository
                                                         .GetById(a => a.LocationId == id)
                                                         .FirstOrDefaultAsync();
            if (location is null) return null;
            LocationDTO dto = new LocationDTO
            {
                LocationId = location.LocationId,
                LocationName = location.LocationName,
            };
            return dto;
        }

        public async Task<bool> AddCity(string cityName)
        {
            Location city = new Location
            {
                LocationName = cityName
            };
            await _unitOfWork.LocationRepository.CreateAsync(city);
            return await _unitOfWork.CompleteAsync();
        }

        public async Task<bool> DeleteCity(int cityId)
        {
            var city = await _unitOfWork.LocationRepository.GetById(a => a.LocationId == cityId).FirstOrDefaultAsync();
            _unitOfWork.LocationRepository.Delete(city ?? throw new InvalidOperationException());
            return await _unitOfWork.CompleteAsync();
        }

        public async Task<bool> EditCity(LocationDTO locationDto)
        {
            Location location = new Location
            {
                LocationId = locationDto.LocationId,
                LocationName = locationDto.LocationName
            };
            _unitOfWork.LocationRepository.Update(location);
            return await _unitOfWork.CompleteAsync();
        }
        
    }
}