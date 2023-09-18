namespace BusReservation.Models.DTOs
{
    public class AddReservationDTO
    {
        public string Seat { get; set; }
        public string UserId { get; set; }
        public int BusLineId { get; set; }
        public DateTime Date { get; set; }
    }
}
