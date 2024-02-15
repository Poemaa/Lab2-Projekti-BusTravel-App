using BusFeedback.Models.DTOs;
using BusFeedback.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BusFeedback.services.interfaces
{
    public interface IFeedbackService
    {
         List<Feedback> GetAllFeedbacks();
         Feedback GetAllFeedbacks(string id);
         Feedback CreateFeedback(Feedback feedback);

        Feedback GetFeedbackById(string id);
          void UpdateFeedback(string id, Feedback feedback);

          void DeleteFeedback(Feedback feedback);
         void DeleteFeedback(string id);
  
       


        //Task<List<FeedbackDTO>> GetAllFeedbacks();
        //Task<FeedbackDTO> GetByIdAsync(int feedbackId);
        //Task<bool> AddFeedback(FeedbackDTO feedbackDto);
        //Task<bool> DeleteFeedback(int feedbackId);
        //Task<bool> EditFeedback(FeedbackDTO feedbackDto);
    }
}
