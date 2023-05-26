namespace Payment.Models.Entities
{
    public class Receipt
    {
        public int ReceiptId { get; set; }

        public int PaymentId { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
    }
}
