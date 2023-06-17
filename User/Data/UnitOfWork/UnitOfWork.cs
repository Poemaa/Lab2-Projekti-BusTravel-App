using System.Collections;
using User.Data.Repository;

namespace User.Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private Hashtable _repositories;
        private readonly UserDbContext _dbContext;

        #region [Repositories]
        public IUserRepository UserRepository => (IUserRepository)InstantiateRepository<UserRepository>();

        #endregion
        
        public UnitOfWork(UserDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<bool> CompleteAsync()
        {
            int affectedRows = await _dbContext.SaveChangesAsync();
            return affectedRows > 0;
        }
        public bool Complete()
        {
            int affectedRows = _dbContext.SaveChanges();
            return affectedRows > 0;
        }
        public void Dispose() => _dbContext.Dispose();
        private object InstantiateRepository<Entity>() where Entity : class
        {
            if (_repositories is null) _repositories = new Hashtable();
            string type = typeof(Entity).Name;
            if (!_repositories.ContainsKey(type))
            {
                object repositoryInstance = Activator.CreateInstance(typeof(Entity), _dbContext);
                _repositories[type] = repositoryInstance;
            }
            return _repositories[type];
        }
    }
}
