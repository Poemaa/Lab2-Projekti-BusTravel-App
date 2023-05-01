using BusRoute.Data.Repository.Models.Interfaces;


namespace BusRoute.Data.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IBusLineRepository BusLineRepository { get; }
        Task<bool> CompleteAsync();
        bool Complete();
    }
}
