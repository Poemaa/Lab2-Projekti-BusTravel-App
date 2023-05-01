using BusRoute.Models.Entities;

namespace BusRoute.Services.Interfaces
{
    public interface IBusItineraryService
    {
        Task<BusItinerary> GetByIdAsync(int id);
    }
}