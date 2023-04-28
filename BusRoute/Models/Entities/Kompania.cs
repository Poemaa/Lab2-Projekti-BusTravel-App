namespace BusRoute.Models.Entities
{
    public class Kompania
    {
        public int KompaniaId { get; set; }
        public String Emri { get; set; }
        public int NrBusave { get; set; }
        public String NrTelefonit { get; set; }
        public String Email { get; set; }

        public List<LinjaAutobusave> LinjaAutobusaves { get; set; }
        
    }
}
