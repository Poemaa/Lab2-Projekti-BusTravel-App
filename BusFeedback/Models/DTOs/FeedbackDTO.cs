namespace BusFeedback.Models.DTOs
{
    public class FeedbackDTO
    {
        public int FeedbackId { get; set; }
        public String Text { get; set; }
        public int UserId { get; set; }
        public int CompanyId { get; set; }
        public DateTime Date { get; set; }
    }
}
