using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace BusFeedback.Models.Entities;



public class Feedback
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    public string Text { get; set; }
    public string CompanyName { get; set; }
    public DateTime Date { get; set; } = DateTime.Now;

}
