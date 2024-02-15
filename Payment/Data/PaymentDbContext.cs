using Microsoft.EntityFrameworkCore;
using Payment.Models.Entities;

namespace Payment.Data
{
    public class PaymentDbContext : DbContext
    {
        public PaymentDbContext(DbContextOptions<PaymentDbContext> options) : base(options)
        {
        }
        public DbSet<Chef> Chefs { get; set; }
        public DbSet<Recipe> Recipes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Recipe>()
                .HasOne(c => c.Chef)
                .WithMany(a => a.Recipes)
                .HasForeignKey(c => c.ChefId);
        }
    }
}




