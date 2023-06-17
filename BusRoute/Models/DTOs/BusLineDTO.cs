using BusRoute.Models.Entities;

namespace BusRoute.Models.DTOs
{
    public class BusLineDTO
    {
        public int Id { get; set; }
        public int DepartureCityId { get; set; }
        public int ArrivalCityId { get; set; }
        public ICollection<BusItinerary> BusItineraries { get; set; }
        public int CompanyId { get; set; }
        public int NumberOfSeats { get; set; }
        public double Price { get; set; }
    }
}
