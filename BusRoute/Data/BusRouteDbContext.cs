using BusRoute.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace BusRoute.Data
{
    public class BusRouteDbContext : DbContext
    {
        public BusRouteDbContext(DbContextOptions<BusRouteDbContext> options) : base(options)
        {
        }

        public DbSet<BusLine> BusLines {get; set;}
        public DbSet<BusItinerary> BusItineraries { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Location> Locations { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BusLine>()
                .HasOne(b => b.ArrivalCity)
                .WithMany(a => a.BusRoutesArrival)
                .OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<BusLine>()
                .HasOne(b => b.DepartureCity)
                .WithMany(c => c.BusRoutesDeparture)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}

