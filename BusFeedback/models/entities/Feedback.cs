namespace BusFeedback.Models.Entities
{
    public class Feedback
    {

        public int FeedbackId { get; set; }
        public String Text { get; set; }

        //public User User { get; set; }
        public int UserId { get; set; }

        //public Company Company { get; set; }
        public int CompanyId { get; set; }
        public DateTime Date { get; set; }
    }
}
