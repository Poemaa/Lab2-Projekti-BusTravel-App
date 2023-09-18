namespace BusFeedback.Data
{
    public class FeedbackDatabaseSettings : IFeedbackDatabaseSettings
    {
        public string FeedbackCollection { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IFeedbackDatabaseSettings
    {
        string FeedbackCollection { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
