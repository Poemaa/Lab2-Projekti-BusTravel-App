using BusRoute.Models.Entities;

namespace BusRoute.Services.Interfaces
{
    public interface ILocationService
    {
        Task<Location> GetByIdAsync(int id);
    }
}

