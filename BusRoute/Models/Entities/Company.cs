namespace BusRoute.Models.Entities
{
    public class Company
    {
        public int CompanyId { get; set; }
        public string Name { get; set; }
        public int NumberOfBuses { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public virtual ICollection<BusLine> BusLines { get; set; }
    }
}