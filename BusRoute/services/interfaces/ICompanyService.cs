using BusRoute.Models.Entities;

namespace BusRoute.Services.Interfaces
{
    public interface ICompanyService
    {
        Task<Company> GetByIdAsync(int id);
    }
}
