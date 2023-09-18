namespace BusReservation.Models.Entities
{
    public class Reservation
    {
        public int ReservationId { get; set; }
        public string UserEmail { get; set; }
        public string Username { get; set; }
        public int BusRouteId { get; set; }
        public DateTime Date { get; set; }
    }
}
