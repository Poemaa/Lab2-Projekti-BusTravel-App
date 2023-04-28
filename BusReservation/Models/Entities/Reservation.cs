namespace BusReservation.Models.Entities
{
    public class Reservation
    {
        public int Id { get; set; }
        public string Seat { get; set; }
        //public User User { get; set; }
        public string UserId { get; set; }
        //public BusRoute BusRoute { get; set; }
        public int BusRouteId { get; set; }
        public DateTime Date { get; set; }
    }
}
