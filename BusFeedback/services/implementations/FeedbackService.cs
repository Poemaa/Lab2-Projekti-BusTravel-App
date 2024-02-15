using BusFeedback.Data;
using BusFeedback.Data.UnitOfWork;
using BusFeedback.Data.Repository.Models.Interfaces;
using BusFeedback.Models.Entities;
using BusFeedback.services.interfaces;
using Microsoft.EntityFrameworkCore;
using BusFeedback.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.CodeAnalysis;
using MongoDB.Driver;


namespace BusFeedback.services.implementations
{
    public class FeedbackService : IFeedbackService
    {
        //private readonly IUnitOfWork _unitOfWork;
        private readonly IMongoCollection<Feedback> _feedbacks;

        public FeedbackService(IFeedbackDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _feedbacks = database.GetCollection<Feedback>(settings.FeedbackCollection);
        }
        public List<Feedback> GetAllFeedbacks() =>
            _feedbacks.Find(feedback => true).ToList();

        public Feedback GetAllFeedbacks(string id) =>
            _feedbacks.Find<Feedback>(feedback => feedback.Id == id).FirstOrDefault();

        public Feedback CreateFeedback(Feedback feedback)
        {
            _feedbacks.InsertOne(feedback);
            return feedback;
        }

        public void UpdateFeedback(string id, Feedback feedback) =>
            _feedbacks.ReplaceOne(feedback => feedback.Id == id, feedback);

        public void DeleteFeedback(Feedback feedbackIn) =>
            _feedbacks.DeleteOne(feedback => feedback.Id == feedbackIn.Id);

        public void DeleteFeedback(string id) =>
            _feedbacks.DeleteOne(feedback => feedback.Id == id);

        public Feedback GetFeedbackById(string id) =>
    _feedbacks.Find<Feedback>(feedback => feedback.Id == id).FirstOrDefault();


        //public async Task<List<FeedbackDTO>> GetAllFeedbacks()
        //{
        //    return await _unitOfWork.FeedbackRepository.GetAll().Select(c => new FeedbackDTO
        //    {
        //        FeedbackId = c.FeedbackId,
        //        Text = c.Text,
        //        UserId = c.UserId,
        //        Username = c.Username,
        //        Rating = c.Rating,
        //        CompanyId = c.CompanyId,
        //        Date = c.Date


        //    }).ToListAsync();
        //}
        //public async Task<FeedbackDTO> GetByIdAsync(int feedbackId)
        //{
        //    var feedback = await _unitOfWork.FeedbackRepository
        //                                                 .GetById(a => a.FeedbackId == feedbackId)
        //                                                 .FirstOrDefaultAsync();
        //    FeedbackDTO dto = new FeedbackDTO
        //    {
        //        FeedbackId = feedback.FeedbackId,
        //        Text = feedback.Text,
        //        UserId = feedback.UserId,
        //        Username = feedback.Username,
        //        Rating = feedback.Rating,
        //        CompanyId = feedback.CompanyId,
        //        Date = feedback.Date
        //    };
        //    return dto;
        //}

        //public async Task<bool> AddFeedback(FeedbackDTO feedbackDto)
        //{
        //    Feedback feedback = new Feedback
        //    {
        //        Text = feedbackDto.Text,
        //        UserId = feedbackDto.UserId,
        //        CompanyId = feedbackDto.CompanyId,
        //        Username = feedbackDto.Username,
        //        Rating = feedbackDto.Rating,
        //        Date = DateTime.Now
        //    };
        //    await _unitOfWork.FeedbackRepository.CreateAsync(feedback);
        //    return await _unitOfWork.CompleteAsync();
        //}

        //public async Task<bool> DeleteFeedback(int feedbackId)
        //{
        //    var feedback = await _unitOfWork.FeedbackRepository.GetById(a => a.FeedbackId == feedbackId).FirstOrDefaultAsync();
        //    _unitOfWork.FeedbackRepository.Delete(feedback ?? throw new InvalidOperationException());
        //    return await _unitOfWork.CompleteAsync();
        //}

        //public async Task<bool> EditFeedback(FeedbackDTO feedbackDto)
        //{
        //    Feedback feedback = new Feedback
        //    {
        //        FeedbackId = feedbackDto.FeedbackId,
        //        Text = feedbackDto.Text,
        //        UserId = feedbackDto.UserId,
        //        Username = feedbackDto.Username,
        //        Rating = feedbackDto.Rating,
        //        CompanyId = feedbackDto.CompanyId,
        //        Date = feedbackDto.Date
        //    };
        //    _unitOfWork.FeedbackRepository.Update(feedback);
        //    return await _unitOfWork.CompleteAsync();
        //}


    }
}