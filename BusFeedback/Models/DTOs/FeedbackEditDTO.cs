using System.ComponentModel.DataAnnotations;

﻿using System.ComponentModel.DataAnnotations;

namespace BusFeedback.Models.DTOs
{
    public class FeedbackEditDTO
    {
        public string Id { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
    }
}
