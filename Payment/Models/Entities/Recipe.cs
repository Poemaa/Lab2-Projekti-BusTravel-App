using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace Payment.Models.Entities
{
    public class Recipe
    {
        [Key]
        public int RecipeId { get; set; }

        // Exclude these properties from Swagger

        public string Title { get; set; }


        public string Difficulty { get; set; }

        [ForeignKey("ChefId")]
        public int ChefId { get; set; }

        [JsonIgnore]
        public Chef? Chef { get; set; } = null;
    }
}

