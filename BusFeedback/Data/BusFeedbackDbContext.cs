using Microsoft.EntityFrameworkCore;


namespace BusFeedback.Data
{
    public class BusFeedbackDbContext : DbContext
    {
        public BusFeedbackDbContext(DbContextOptions<BusFeedbackDbContext> options) : base(options)
        {
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}