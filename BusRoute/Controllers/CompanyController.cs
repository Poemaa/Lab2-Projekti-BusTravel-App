using BusRoute.Models.DTOs;
using BusRoute.Models.Entities;
using BusRoute.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BusRoute.Controllers
{
    [Route("api/company")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyService _companyService;

        public CompanyController(ICompanyService companyService)
        {
            _companyService = companyService;
        }

        [HttpGet("companies")]
        public async Task<IActionResult> GetAllCompanies()
        {
            var companies = await _companyService.GetAllCompanies();
            return companies != null ? Ok(companies) : NotFound();
        }

        [HttpGet("company/{id:int}")]
        public async Task<IActionResult> GetCompanyByIdAsync(int id)
        {
            var company = await _companyService.GetByIdAsync(id);
            return company != null ? Ok(company) : NotFound();
        }

        [HttpPost("company")]
        public async Task<IActionResult> AddCompany(CompanyDTO companyDto)
        {
            var created = await _companyService.AddCompany(companyDto);
            return created != null ? Ok("Company created") : BadRequest();
        }

        [HttpPut("company")]
        public async Task<IActionResult> EditCompany([FromForm] CompanyEditDTO companyToEdit)
        {
            var edited = await _companyService.EditCompany(companyToEdit);
            return edited != null ? Ok("Company edited successfully") : BadRequest();
        }

        [HttpDelete("company/{companyId:int}")]
        public async Task<IActionResult> DeleteCompanyById(int companyId)
        {
            var deleted = await _companyService.DeleteCompany(companyId);
            return deleted != null ? Ok("Company deleted") : BadRequest();
        }

    }
}

