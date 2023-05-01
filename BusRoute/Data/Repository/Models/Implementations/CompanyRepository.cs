using BusRoute.Data.Repository.Generic;
using BusRoute.Data.Repository.Models.Interfaces;
using BusRoute.Models.Entities;

namespace BusRoute.Data.Repository.Models
{
    public class CompanyRepository : GenericRepository<Company>, ICompanyRepository
    {
        public CompanyRepository(BusRouteDbContext context) : base(context) { }
    }
}
