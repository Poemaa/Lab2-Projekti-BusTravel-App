namespace BusRoute.Models.DTOs
{
    public class CompanyDTO
    {
     
        public string Name { get; set; } = null!;
        public int NumberOfBuses { get; set; }
        public string PhoneNumber { get; set; } = null!;
        public string Email { get; set; } = null!;
    }
}
