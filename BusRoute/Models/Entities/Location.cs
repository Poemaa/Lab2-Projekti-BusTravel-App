using Newtonsoft.Json;

namespace BusRoute.Models.Entities
{
    public class Location
    {
        public Location()
        {
            this.BusStops = new HashSet<BusLine>();
        }
        public int LocationId { get; set; }
        public string LocationName { get; set; }
        public ICollection<BusLine> BusRoutesDeparture { get; set; }
        public ICollection<BusLine> BusRoutesArrival { get; set; }
        public virtual ICollection<BusLine> BusStops { get; set; }
    }
}
