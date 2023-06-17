using BusRoute.Models.Entities;
using System.ComponentModel.DataAnnotations;

namespace BusRoute.Models.DTOs
{
    public class BusItineraryCreateDTO
    {
        [RegularExpression(@"^([01]\d|2[0-3]):[0-5]\d$", ErrorMessage = "The DepartureTime must be in the 24-hour format (e.g., 16:30).")]
        public string DepartureTime { get; set; }
        [RegularExpression(@"^([01]\d|2[0-3]):[0-5]\d$", ErrorMessage = "The ArrivalTime must be in the 24-hour format (e.g., 16:30).")]
        public string ArrivalTime { get; set; }
        public int BusLineId { get; set; }
    }
}
