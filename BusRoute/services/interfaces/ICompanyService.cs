using BusRoute.Models.DTOs;
using BusRoute.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BusRoute.Services.Interfaces
{
    public interface ICompanyService
    {
        Task<List<CompanyDTO>> GetAllCompanies();
        Task<CompanyDTO> GetByIdAsync(int id);
        Task<bool> AddCompany(CompanyDTO companyDto);
        Task<bool> DeleteCompany(int companyId);
        Task<bool> EditCompany(CompanyDTO companyDto);
    }
}
