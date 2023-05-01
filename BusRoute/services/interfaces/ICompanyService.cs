using BusRoute.Models.Entities;

namespace BusRoute.Services.Interfaces
{
    public interface ICompanyServices
    {
        Task<Company> GetByIdAsync(int id);
    }
}
