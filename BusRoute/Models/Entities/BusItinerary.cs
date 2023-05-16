using MessagePack;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusRoute.Models.Entities
{
    public class BusItinerary
    {
        public BusItinerary()
        {
            this.BusLines = new HashSet<BusLine>();
        }
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public TimeOnly DepartureTime { get; set; }
        public TimeOnly ArrivalTime { get; set; }
        public TimeSpan Duration { get; set; }


        public virtual ICollection<BusLine>? BusLines { get; set; }
    }
}
