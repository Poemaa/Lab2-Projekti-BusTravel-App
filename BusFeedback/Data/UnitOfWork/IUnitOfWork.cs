namespace BusFeedback.Data.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        Task<bool> CompleteAsync();
        bool Complete();
    }
}
