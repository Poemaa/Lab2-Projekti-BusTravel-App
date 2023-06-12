using BusFeedback.Models.DTOs;
using BusFeedback.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BusFeedback.Services.Interfaces
{
    public interface IFeedbackService
    {
        Task<List<FeedbackDTO>> GetAllFeedbacks();
        Task<FeedbackDTO> GetByIdAsync(int feedbackId);
        Task<bool> AddFeedback(FeedbackDTO feedbackDto);
        Task<bool> DeleteFeedback(int feedbackId);
        Task<bool> EditFeedback(FeedbackDTO feedbackDto);
    }
}
