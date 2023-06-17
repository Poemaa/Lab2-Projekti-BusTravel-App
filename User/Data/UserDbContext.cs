using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using User.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.CodeAnalysis;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace User.Data
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        {
        }

        public DbSet<Models.Entities.User> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
