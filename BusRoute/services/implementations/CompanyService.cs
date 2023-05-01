using BusRoute.Data.UnitOfWork;
using BusRoute.Models.Entities;
using BusRoute.Services.Interfaces;
using Microsoft.EntityFrameworkCore;


namespace BusRoute.Services.Implementations
{
    public class CompanyService : ICompanyService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CompanyService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<Company> GetByIdAsync(int id)
        {
            var company = await _unitOfWork.CompanyRepository
                                                         .GetById(a => a.CompanyId == id)
                                                         .FirstOrDefaultAsync();
            return company;
        }
    }
}
