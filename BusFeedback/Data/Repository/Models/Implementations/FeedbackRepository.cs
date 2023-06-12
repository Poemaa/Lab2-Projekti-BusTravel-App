using BusFeedback.Data.Repository.Generic;
using BusFeedback.Data.Repository.Models.Interfaces;
using BusFeedback.Models.Entities;

namespace BusFeedback.Data.Repository.Models
{
    public class FeedbackRepository : GenericRepository<Feedback>, IFeedbackRepository
    {
        public FeedbackRepository(BusFeedbackDbContext context) : base(context) { }
    }
}