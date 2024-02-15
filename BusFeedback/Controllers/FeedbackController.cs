using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using BusFeedback.Models.Entities;
using BusFeedback.services.interfaces;


namespace BusFeedback.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private readonly IFeedbackService _feedbackService;

        public FeedbackController(IFeedbackService feedbackService)
        {
            _feedbackService = feedbackService ?? throw new ArgumentNullException(nameof(feedbackService));
        }

        [HttpGet]
        public ActionResult<IEnumerable<Feedback>> Get()
        {
            try
            {
                var feedbacks = _feedbackService.GetAllFeedbacks();
                return Ok(feedbacks);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Feedback> Get(string id)
        {
            try
            {
                var feedback = _feedbackService.GetFeedbackById(id);
                if (feedback == null)
                {
                    return NotFound();
                }
                return Ok(feedback);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        public ActionResult<Feedback> Post([FromBody] Feedback feedback)
        {
            try
            {
                if (feedback == null)
                {
                    return BadRequest("Feedback object is null");
                }

                var createdFeedback = _feedbackService.CreateFeedback(feedback);
                return CreatedAtAction(nameof(Get), new { id = createdFeedback.Id }, createdFeedback);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody] Feedback feedback)
        {
            try
            {
                var existingFeedback = _feedbackService.GetFeedbackById(id);

                if (existingFeedback == null)
                {
                    return NotFound();
                }

                _feedbackService.UpdateFeedback(id, feedback);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            try
            {
                var feedback = _feedbackService.GetFeedbackById(id);

                if (feedback == null)
                {
                    return NotFound();
                }

                _feedbackService.DeleteFeedback(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
