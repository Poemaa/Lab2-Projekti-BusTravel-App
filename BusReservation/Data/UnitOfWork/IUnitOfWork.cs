using BusReservation.Data.Repository.Models.Interfaces;

namespace BusReservation.Data.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IReservationRepository ReservationRepository { get; }
        Task<bool> CompleteAsync();
        bool Complete();
    }
}
