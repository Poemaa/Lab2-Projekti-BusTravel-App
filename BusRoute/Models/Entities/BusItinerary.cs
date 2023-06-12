﻿using MessagePack;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusRoute.Models.Entities
{
    public class BusItinerary
    {
        public BusItinerary()
        {
            this.BusLines = new HashSet<BusLine>();
        }
        public int BusItineraryId { get; set; }
        public DateTime Date { get; set; }
        [RegularExpression(@"^([01]\d|2[0-3]):[0-5]\d$", ErrorMessage = "The DepartureTime must be in the 24-hour format (e.g., 16:30).")]
        public string DepartureTime { get; set; }
        [RegularExpression(@"^([01]\d|2[0-3]):[0-5]\d$", ErrorMessage = "The ArrivalTime must be in the 24-hour format (e.g., 16:30).")]
        public string ArrivalTime { get; set; }
        public TimeSpan Duration { get; set; }
        public virtual ICollection<BusLine>? BusLines { get; set; }
    }
}
