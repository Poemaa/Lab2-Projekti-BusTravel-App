using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace User.Data.Repository
{
    public interface IUserRepository : IGenericRepository<Models.Entities.User>
    {
    }
}
