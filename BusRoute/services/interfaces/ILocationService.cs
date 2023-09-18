using BusRoute.Models.DTOs;
using BusRoute.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BusRoute.Services.Interfaces
{
    public interface ILocationService
    {
        Task<List<LocationDTO>> GetAllCities();
        Task<LocationDTO> GetByIdAsync(int id);
        Task<bool> AddCity(LocationDTO newlocation);
        Task<bool> DeleteCity(int cityId);
        Task<bool> EditCity(LocationDTO location);
    }
}

