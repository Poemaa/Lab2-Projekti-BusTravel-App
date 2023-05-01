using BusRoute.Models.Entities;
using BusRoute.Services.Implementations;
using BusRoute.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

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

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetCompanyByIdAsync(int id)
        {
            var company = await _companyService.GetByIdAsync(id);
            return company != null ? Ok(company) : NotFound();
        }


    }
}

