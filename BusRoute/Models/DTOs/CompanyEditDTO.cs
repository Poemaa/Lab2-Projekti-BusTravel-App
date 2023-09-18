namespace BusRoute.Models.DTOs
{
    public class CompanyEditDTO
    {
        public int CompanyId { get; set; }
        public string Name { get; set; }
        public int NumberOfBuses { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
    }
}