using Newtonsoft.Json;

namespace BusRoute.Models.Entities
{
    public class Location
    {
        public int LocationId { get; set; }
        public string LocationName { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }

        public ICollection<BusLine> BusRoutesDeparture { get; set; }
        public ICollection<BusLine> BusRoutesArrival { get; set; }
    }
}


