using BusFeedback.Models.DTOs;
using BusFeedback.Models.Entities;
using BusFeedback.services.interfaces;  
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Security.Claims;
using BusFeedback.services.implementations;

namespace BusFeedback.Controllers
{

    [Route("api/feedback")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private readonly IFeedbackService _feedbackService;

        public FeedbackController(IFeedbackService feedbackService)
        {
            _feedbackService = feedbackService;
        }

        [HttpGet]
        public IActionResult GetAllFeedbacks()
        {
            var feedbacks = _feedbackService.GetAllFeedbacks();
            return feedbacks.Count > 0 ? Ok(feedbacks) : NotFound();
        }

        [HttpGet("/feedbackId")]
        public IActionResult GetFeedbackByIdAsync(string Id)
        {
            var feedback = _feedbackService.GetAllFeedbacks(Id);
            return feedback != null ? Ok(feedback) : NotFound();
        }

       // [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddFeedback(FeedbackDTO feedbackDto)
        {

            Feedback feedback = new Feedback()
            {
                CompanyName = feedbackDto.CompanyName,
                Text = feedbackDto.Text,
                Date = DateTime.Now,
               
            };

            var created = _feedbackService.CreateFeedback(feedback);
            return created != null ? Ok("Feedback created") : BadRequest();
        }

        //[Authorize]
        [HttpPut]
        public async Task<IActionResult> UpdateFeedback([FromForm] FeedbackEditDTO feedbackDto)
        {
            var feedBack = _feedbackService.GetAllFeedbacks(feedbackDto.Id);
            feedBack.Text = feedbackDto.Text;
            _feedbackService.UpdateFeedback(feedbackDto.Id, feedBack);
            return Ok("Feedback updated");
        }

       // [Authorize]
        [HttpDelete("/feedbackId")]
        public async Task<IActionResult> DeleteFeedbackById(string Id)
        {
            _feedbackService.DeleteFeedback(Id);
            return Ok("Feedback deleted");
        }

    }
}

