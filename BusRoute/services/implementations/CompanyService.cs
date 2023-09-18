using BusRoute.Data.UnitOfWork;
using BusRoute.Models.DTOs;
using BusRoute.Models.Entities;
using BusRoute.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BusRoute.services.Implementations
{
    public class CompanyService : ICompanyService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CompanyService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<List<Company>> GetAllCompanies()
        {
            return await _unitOfWork.CompanyRepository.GetAll().ToListAsync();
        }
        public async Task<Company> GetByIdAsync(int id)
        {
            return await _unitOfWork.CompanyRepository
                                                         .GetById(a => a.CompanyId == id)
                                                         .FirstOrDefaultAsync();
        }

        public async Task<bool> AddCompany(CompanyDTO companyDto)
        {
            Company company = new Company
            {
                Name = companyDto.Name,
                NumberOfBuses = companyDto.NumberOfBuses,
                PhoneNumber = companyDto.PhoneNumber,
                Email = companyDto.Email

            };
            await _unitOfWork.CompanyRepository.CreateAsync(company);
            return await _unitOfWork.CompleteAsync();
        }

        public async Task<bool> DeleteCompany(int companyId)
        {
            var company = await _unitOfWork.CompanyRepository.GetById(a => a.CompanyId == companyId).FirstOrDefaultAsync();
            _unitOfWork.CompanyRepository.Delete(company ?? throw new InvalidOperationException());
            return await _unitOfWork.CompleteAsync();
        }

        public async Task<bool> EditCompany(CompanyEditDTO companyToEdit)
        {
            Company company = new Company
            {
              
                CompanyId = companyToEdit.CompanyId,
                Name = companyToEdit.Name,
                NumberOfBuses = companyToEdit.NumberOfBuses,
                PhoneNumber = companyToEdit.PhoneNumber,
                Email = companyToEdit.Email
            };
            _unitOfWork.CompanyRepository.Update(company);
            return await _unitOfWork.CompleteAsync();
        }

      
    }
}
