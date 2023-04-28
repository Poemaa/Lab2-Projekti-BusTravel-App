using BusRoute.Models.Entities;
using Microsoft.EntityFrameworkCore;


namespace BusRoute.Data
{
    public class BusRouteDbContext : DbContext
    {
        public BusRouteDbContext(DbContextOptions<BusRouteDbContext> options) : base(options)
        {
        }

        public DbSet<LinjaAutobusave> LinjaAutobusaves {get; set;}


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
