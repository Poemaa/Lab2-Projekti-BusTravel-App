using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Payment.Models.Entities;

public class Chef
{
    [Key]
    public int ChefId { get; set; }
    public string Name { get; set; }
    public int BirthYear { get; set; } 

    [JsonIgnore]
    public ICollection<Recipe>? Recipes { get; set; }
}
