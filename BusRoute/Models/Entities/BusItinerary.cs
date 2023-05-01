using MessagePack;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusRoute.Models.Entities
{
    public class BusItinerary
    {
        public int ItineraryId { get; set; }
        public DateTime Date { get; set; }
        public TimeOnly DepartureTime { get; set; }
        public TimeOnly ArrivalTime { get; set; }
        public TimeSpan Duration { get; set; }


        public ICollection<BusLine>? BusLineItinerary { get; set; }
    }
}
