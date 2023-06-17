namespace User.Data.Repository
{
    public class UserRepository : GenericRepository<Models.Entities.User>, IUserRepository
    {
        public UserRepository(UserDbContext context) : base(context) { }
    }
}
