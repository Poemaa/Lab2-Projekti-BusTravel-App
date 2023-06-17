using System.ComponentModel.DataAnnotations.Schema;

namespace BusRoute.Models.Entities
{
    public class BusLine
    {
        public BusLine()
        {
            this.BusItineraries = new HashSet<BusItinerary>();
        }
        public int Id { get; set; }
        public virtual Location DepartureCity { get; set; }
        public virtual Location ArrivalCity { get; set; }
        public int DepartureCityId { get; set; }
        public int ArrivalCityId { get; set; }
        public int CompanyId { get; set; }
        public virtual Company Company { get; set; } 
        public int NumberOfSeats { get; set; }
        public double Price { get; set; }
        public virtual ICollection<BusItinerary> BusItineraries { get; set; }
    }
    
}
