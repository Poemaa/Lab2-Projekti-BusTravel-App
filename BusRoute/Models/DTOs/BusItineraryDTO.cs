namespace BusRoute.Models.DTOs
{
    public class BusItineraryDTO
    {
        public int BusItineraryId { get; set; }
        public DateTime Date { get; set; }
        public TimeOnly DepartureTime { get; set; }
        public TimeOnly ArrivalTime { get; set; }
        public TimeSpan Duration { get; set; }


    }
}
