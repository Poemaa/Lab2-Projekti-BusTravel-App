using Microsoft.EntityFrameworkCore;

namespace BusReservation.Data
{
    public class BusReservationDbContext : DbContext
    {
        public BusReservationDbContext(DbContextOptions<BusReservationDbContext> options) : base(options)
        {
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
