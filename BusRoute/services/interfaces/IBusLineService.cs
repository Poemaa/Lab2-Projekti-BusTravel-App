using BusRoute.Models.Entities;

namespace BusRoute.Services.Interfaces
{
    public interface IBusLineService
    {
        Task<BusLine> GetByIdAsync(int id);
    }
}
