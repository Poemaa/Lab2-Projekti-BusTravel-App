using BusRoute.Data.UnitOfWork;
using BusRoute.Models.Entities;
using BusRoute.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using BusRoute.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.CodeAnalysis;

namespace BusRoute.services.Implementations
{
    public class CompanyService : ICompanyService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CompanyService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<List<CompanyDTO>> GetAllCompanies()
        {
            return await _unitOfWork.CompanyRepository.GetAll().Select(c => new CompanyDTO
            {
                CompanyId = c.CompanyId,
                Name = c.Name,
                NumberOfBuses=c.NumberOfBuses,
                PhoneNumber= c.PhoneNumber,
                Email=c.Email

            }).ToListAsync();
        }
        public async Task<CompanyDTO> GetByIdAsync(int id)
        {
            var company = await _unitOfWork.CompanyRepository
                                                         .GetById(a => a.CompanyId == id)
                                                         .FirstOrDefaultAsync();
            CompanyDTO dto = new CompanyDTO
            {
              CompanyId= company.CompanyId,
                Name = company.Name,
                NumberOfBuses = company.NumberOfBuses,
                PhoneNumber= company.PhoneNumber,
                Email = company.Email
            };
            return dto;
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

        public async Task<bool> EditCompany(CompanyDTO companyDto)
        {
            Company company = new Company
            {
               CompanyId = companyDto.CompanyId,
                Name = companyDto.Name,
                NumberOfBuses = companyDto.NumberOfBuses,
                PhoneNumber = companyDto.PhoneNumber,
                Email = companyDto.Email
            };
            _unitOfWork.CompanyRepository.Update(company);
            return await _unitOfWork.CompleteAsync();
        }

       
    }
}
