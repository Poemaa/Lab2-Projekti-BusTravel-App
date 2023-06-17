namespace BusRoute.Models.DTOs
{
    public class BusLineCreateDTO
    {
        public int DepartureCityId { get; set; }
        public int ArrivalCityId { get; set; }
        public int CompanyId { get; set; }
        public int NumberOfSeats { get; set; }
        public double Price { get; set; }
    }
}