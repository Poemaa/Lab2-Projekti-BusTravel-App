using User.Data.Repository;

namespace User.Data.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository UserRepository { get; }
        Task<bool> CompleteAsync();
        bool Complete();
    }
}
