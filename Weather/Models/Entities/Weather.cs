namespace Weather.Models.Entities
{
    public class Weather
    {
        public int Id { get; set; }
        public string City { get; set; }
        public string Description { get; set; }
        public double Temperature { get; set; }
        public double WindSpeed { get; set; }
        public string WindDirection { get; set; }
        public DateTime Date { get; set; }
        public double Precipitation { get; set; }
    }
}   
    
