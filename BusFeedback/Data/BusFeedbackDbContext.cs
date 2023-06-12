using BusFeedback.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace BusFeedback.Data
{
    public class BusFeedbackDbContext : DbContext
    {
        public BusFeedbackDbContext(DbContextOptions<BusFeedbackDbContext> options) : base(options)
        {
        }

        public DbSet<Feedback> Feedbacks { get; set; }

    }
}

