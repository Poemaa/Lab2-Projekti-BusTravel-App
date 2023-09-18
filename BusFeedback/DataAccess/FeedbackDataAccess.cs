using MongoDB.Driver;
using BusFeedback.Models.Entities;
namespace BusFeedback.DataAccess
{
    public class FeedbackDataAccess
    {

        private const string ConnectionString = "mongodb://localhost:27017";
        private const string DatabaseName = "CompanyFeedback";
        private const string FeedbackCollection = "feedbacks";

        private IMongoCollection<T> ConnectToMongo<T>(in string collection)
        {
            var client = new MongoClient(ConnectionString);
            var db = client.GetDatabase(DatabaseName);
            return db.GetCollection<T>(collection);
        }

        public async Task<List<Feedback>> GetAllFeedbacks()
        {
            var feedbacksCollection = ConnectToMongo<Feedback>(FeedbackCollection);
            var results = await feedbacksCollection.FindAsync(_ => true);
            return results.ToList();
        }

        public Task CreateFeedback(Feedback feedback)
        {
            var feedbacksCollection = ConnectToMongo<Feedback>(FeedbackCollection);
            return feedbacksCollection.InsertOneAsync(feedback);

        }

        public Task UpdateFeedback(Feedback feedback)
        {
            var feedbacksCollection = ConnectToMongo<Feedback>(FeedbackCollection);
            var filter = Builders<Feedback>.Filter.Eq("Id", feedback.Id);
            return feedbacksCollection.ReplaceOneAsync(filter, feedback, new ReplaceOptions { IsUpsert = true });
        }

        public Task DeleteFeedback(Feedback feedback)
        {
            var feedbacksCollection = ConnectToMongo<Feedback>(FeedbackCollection);
            return feedbacksCollection.DeleteOneAsync(c => c.Id == feedback.Id);

        }
    }

}
