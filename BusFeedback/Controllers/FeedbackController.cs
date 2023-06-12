using BusFeedback.Models.DTOs;
using BusFeedback.Models.Entities;
using BusFeedback.services.Implementations;
using BusFeedback.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

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

        [HttpGet("feedback")]
        public async Task<IActionResult> GetAllFeedbacks()
        {
            var feedback = await _feedbackService.GetAllFeedbacks();
            return feedback != null ? Ok(feedback) : NotFound();
        }

        [HttpGet("feedback/{id:int}")]
        public async Task<IActionResult> GetFeedbackByIdAsync(int feedbackId)
        {
            var feedback = await _feedbackService.GetByIdAsync(feedbackId);
            return feedback != null ? Ok(feedback) : NotFound();
        }

        [HttpPost("feedback")]
        public async Task<IActionResult> AddFeedback(FeedbackDTO feedbackDto)
        {
            var created = await _feedbackService.AddFeedback(feedbackDto);
            return created != null ? Ok("Feedback created") : BadRequest();
        }

        [HttpPut("feedback")]
        public async Task<IActionResult> EditFeedback([FromForm] FeedbackDTO feedbackDto)
        {
            var edited = await _feedbackService.EditFeedback(feedbackDto);
            return edited != null ? Ok("Feedback edited successfully") : BadRequest();
        }

        [HttpDelete("feedback/{feedbackId:int}")]
        public async Task<IActionResult> DeleteFeedbackById(int feedbackId)
        {
            var deleted = await _feedbackService.DeleteFeedback(feedbackId);
            return deleted != null ? Ok("Feedback deleted") : BadRequest();
        }

    }
}

