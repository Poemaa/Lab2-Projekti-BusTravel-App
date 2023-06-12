using BusFeedback.Data.Repository.Models.Interfaces;


namespace BusFeedback.Data.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IFeedbackRepository FeedbackRepository { get; }

        Task<bool> CompleteAsync();
        bool Complete();



    }

}
