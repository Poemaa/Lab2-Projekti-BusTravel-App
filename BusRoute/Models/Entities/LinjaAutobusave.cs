using System.ComponentModel.DataAnnotations.Schema;

namespace BusRoute.Models.Entities
{
    public class LinjaAutobusave
    {
        public int BusRouteId { get; set; }

        [ForeignKey("ItinerariId")]
        public int ItinerariId { get; set; }
        public Itinerari Itinerari { get; set; } = null!;

        [ForeignKey("KompaniaId")]
        public int KomapniaId { get; set; }
        public Kompania Kompania { get; set; } = null!;
        public int NumriVendeve { get; set; }
        public double Cmimi { get; set; }
    }
}
