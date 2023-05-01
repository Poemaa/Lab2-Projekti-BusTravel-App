using BusRoute.Data.Repository.Generic;
using BusRoute.Data.Repository.Models.Interfaces;
using BusRoute.Models.Entities;

namespace BusRoute.Data.Repository.Models
{
    public class LocationRepository : GenericRepository<Location>, ILocationRepository
    {
        public LocationRepository(BusRouteDbContext context) : base(context) { }
    }
    
}

