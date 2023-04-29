using BusReservation.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace BusReservation.Data
{
    public class BusReservationDbContext : DbContext
    {
        public BusReservationDbContext(DbContextOptions<BusReservationDbContext> options) : base(options)
        {
        }

        public DbSet<Reservation> Reservations { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
