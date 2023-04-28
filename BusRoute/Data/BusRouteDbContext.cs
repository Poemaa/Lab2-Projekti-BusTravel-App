using Microsoft.EntityFrameworkCore;


namespace BusRoute.Data
{
    public class BusRouteDbContext : DbContext
    {
        public BusRouteDbContext(DbContextOptions<BusRouteDbContext> options) : base(options)
        {
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
