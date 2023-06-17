using BusRoute.Models.DTOs;
using BusRoute.Models.Entities;
using Microsoft.AspNetCore.Mvc;


namespace BusRoute.Services.Interfaces
{
    public interface IBusItineraryService
    {
        Task<List<BusItineraryDTO>> GetAllBusItineraries();
        Task<BusItineraryDTO?> GetByIdAsync(int id);
        Task<bool> AddBusItinerary(BusItineraryCreateDTO busItineraryDto);
        Task<bool> DeleteBusItinerary(int busItineraryId);
        Task<bool> EditBusItinerary(BusItineraryDTO busItineraryDto);
    }
}