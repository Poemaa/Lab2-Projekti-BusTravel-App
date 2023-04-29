using BusReservation.Data.Repository.Generic;
using BusReservation.Data.Repository.Models.Interfaces;
using BusReservation.Models.Entities;

namespace BusReservation.Data.Repository.Models
{
    public class ReservationRepository : GenericRepository<Reservation>, IReservationRepository
    {
        public ReservationRepository(BusReservationDbContext context) : base(context) { }
    }
}
