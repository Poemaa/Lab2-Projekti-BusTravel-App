using BusRoute.Data.Repository.Generic;
using BusRoute.Data.Repository.Models.Interfaces;
using BusRoute.Models.Entities;

namespace BusRoute.Data.Repository.Models
{
    public class BusLineRepository : GenericRepository<BusLine>, IBusLineRepository
    {
        public BusLineRepository(BusRouteDbContext context) : base(context) { }
    }
}