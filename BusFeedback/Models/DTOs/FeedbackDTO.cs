using System.ComponentModel.DataAnnotations;

namespace BusFeedback.Models.DTOs
{
    public class FeedbackDTO
    {
        public string Text { get; set; }
        public string CompanyName { get; set; }
    }
}
