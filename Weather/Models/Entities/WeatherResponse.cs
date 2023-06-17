using Newtonsoft.Json;

namespace Weather.Models.Entities
{
    public class WeatherResponse
    {
        [JsonProperty("latitude")]
        public double Latitude { get; set; }

        [JsonProperty("longitude")]
        public double Longitude { get; set; }

        [JsonProperty("daily")]
        public DailyWeather Daily { get; set; }
    }

    public class DailyWeather
    {
        [JsonProperty("weathercode")]
        public int[] WeatherCode { get; set; }

        [JsonProperty("temperature_2m_max")]
        public double[] Temperature2mMax { get; set; }

        [JsonProperty("temperature_2m_min")]
        public double[] Temperature2mMin { get; set; }
    }

}
