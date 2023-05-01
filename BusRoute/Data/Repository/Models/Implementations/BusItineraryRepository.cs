using BusRoute.Data.Repository.Generic;
using BusRoute.Data.Repository.Models.Interfaces;
using BusRoute.Models.Entities;

namespace BusRoute.Data.Repository.Models
{
    public class BusItineraryRepository : GenericRepository<BusItinerary>, IBusItineraryRepository
    {
        public BusItineraryRepository(BusRouteDbContext context) : base(context) { }
    }
}