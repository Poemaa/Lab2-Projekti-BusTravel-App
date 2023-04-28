namespace BusRoute.Models.Entities
{
    public class Lokacioni
    {
        public int LokacioniId { get; set; }
        public String LokacioniEmri { get; set;}

        public List<Itinerari> Itineraris { get; set; }
    }
}
