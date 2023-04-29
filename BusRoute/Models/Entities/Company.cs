namespace BusRoute.Models.Entities
{
    public class Company
    {
        public int CompanyId { get; set; }
        public String Name { get; set; }
        public int NumberOfBuses { get; set; }
        public String PhoneNumber { get; set; }
        public String Email { get; set; }

        public ICollection<BusLine> BusLineCompany { get; set; }


    }
}
