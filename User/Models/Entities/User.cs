using System.ComponentModel.DataAnnotations.Schema;

namespace User.Models.Entities
{
    public class User
    {
        public int UserId { get; set; }
        public String Name { get; set; }
        public String Surname { get; set; }
        public String Email { get; set; }
        public String Password { get; set; }

    }
}
