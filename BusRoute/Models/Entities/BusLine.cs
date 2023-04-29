using System.ComponentModel.DataAnnotations.Schema;

namespace BusRoute.Models.Entities
{
    public class BusLine
    {
        public int BusRouteId { get; set; }
        public int ItineraryId { get; set; }
        public BusItinerary BusItinerary { get; set; }
        public int CityDepartureId { get; set; }
        public int CityArrivalId { get; set; }
        public Location CityDeparture { get; set; }
        public Location CityArrival { get; set; }
        public int CompanyId { get; set; }
        public Company Company { get; set; } 
        public int NumberOfSeats { get; set; }
        public double Price { get; set; }

        public ICollection<Location> BusStops { get; set; }
        
    }
}
