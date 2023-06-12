using BusFeedback.Data.UnitOfWork;
using BusFeedback.Data.Repository.Models.Interfaces;
using BusFeedback.Models.Entities;
using BusFeedback.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using BusFeedback.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.CodeAnalysis;


namespace BusFeedback.services.implementations
{
    public class FeedbackService : IFeedbackService
    {
        private readonly IUnitOfWork _unitOfWork;

        public FeedbackService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<List<FeedbackDTO>> GetAllFeedbacks()
        {
            return await _unitOfWork.FeedbackRepository.GetAll().Select(c => new FeedbackDTO
            {
                FeedbackId = c.FeedbackId,
                Text = c.Text,
                UserId = c.UserId,
                CompanyId = c.CompanyId,
                Date = c.Date


            }).ToListAsync();
        }
        public async Task<FeedbackDTO> GetByIdAsync(int feedbackId)
        {
            var feedback = await _unitOfWork.FeedbackRepository
                                                         .GetById(a => a.FeedbackId == feedbackId)
                                                         .FirstOrDefaultAsync();
            FeedbackDTO dto = new FeedbackDTO
            {
                FeedbackId = feedback.FeedbackId,
                Text = feedback.Text,
                UserId = feedback.UserId,
                CompanyId = feedback.CompanyId,
                Date = feedback.Date
            };
            return dto;
        }

        public async Task<bool> AddFeedback(FeedbackDTO feedbackDto)
        {
            Feedback feedback = new Feedback
            {
                Text = feedbackDto.Text,
                UserId = feedbackDto.UserId,
                CompanyId = feedbackDto.CompanyId,
                Date = feedbackDto.Date
            };
            await _unitOfWork.FeedbackRepository.CreateAsync(feedback);
            return await _unitOfWork.CompleteAsync();
        }

        public async Task<bool> DeleteFeedback(int feedbackId)
        {
            var feedback = await _unitOfWork.FeedbackRepository.GetById(a => a.FeedbackId == feedbackId).FirstOrDefaultAsync();
            _unitOfWork.FeedbackRepository.Delete(feedback ?? throw new InvalidOperationException());
            return await _unitOfWork.CompleteAsync();
        }

        public async Task<bool> EditFeedback(FeedbackDTO feedbackDto)
        {
            Feedback feedback = new Feedback
            {
                FeedbackId = feedbackDto.FeedbackId,
                Text = feedbackDto.Text,
                UserId = feedbackDto.UserId,
                CompanyId = feedbackDto.CompanyId,
                Date = feedbackDto.Date
            };
            _unitOfWork.FeedbackRepository.Update(feedback);
            return await _unitOfWork.CompleteAsync();
        }

       
    }
}
