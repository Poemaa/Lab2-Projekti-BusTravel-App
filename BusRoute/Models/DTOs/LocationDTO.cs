namespace BusRoute.Models.DTOs
{
    public class LocationDTO
    {
        public int LocationId { get; set; }
        public string LocationName { get; set; } = null!;
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
