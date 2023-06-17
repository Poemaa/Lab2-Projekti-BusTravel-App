namespace BusRoute.Models.Entities
{
    public class Company
    {
        public int CompanyId { get; set; }
        public string Name { get; set; } = null!;
        public int NumberOfBuses { get; set; } 
        public string PhoneNumber { get; set; } = null!;
        public string Email { get; set; } = null!;
        public virtual ICollection<BusLine> BusLines { get; set; }
    }
}