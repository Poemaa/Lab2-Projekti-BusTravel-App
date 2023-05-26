namespace Payment.Models.Entities
{
    public class Payment
    {
        public int PaymentId { get; set; }

        public DateTime Date { get; set; }

        //public Rezervimi Rezervimi { get; set; }
        public int RezervimiId { get; set; }


        //public User User { get; set; }
        public int UserId { get; set; }

        public double Total { get; set; }

        public String PaymentMethod { get; set; }


    }
}
