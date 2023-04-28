using MessagePack;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusRoute.Models.Entities
{
    public class Itinerari
    {
        public int ItinerariId { get; set; }
        public DateTime Data{ get; set; }
        public DateTime Ora { get; set; }
       
        [ForeignKey("LokacioniId")]
        public int LokacioniId { get; set; }
        public Lokacioni Lokacioni { get; set; } = null!;

        public List<LinjaAutobusave> LinjaAutobusaves { get; set; }
    }
}
