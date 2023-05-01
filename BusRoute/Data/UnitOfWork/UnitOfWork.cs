using BusRoute.Data.Repository.Models;
using BusRoute.Data.Repository.Models.Interfaces;
using BusRoute.Services.Interfaces;
using System.Collections;

namespace BusRoute.Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private Hashtable _repositories;
        private readonly BusRouteDbContext _dbContext;

        #region [Repositories]
        public IBusLineRepository BusLineRepository => (IBusLineRepository)InstantiateRepository<IBusLineRepository>();
        public ILocationRepository LocationRepository => (ILocationRepository)InstantiateRepository<ILocationRepository>();
        public ICompanyRepository CompanyRepository => (ICompanyRepository)InstantiateRepository<ICompanyRepository>();
        public IBusItineraryRepository BusItineraryRepository => (IBusItineraryRepository)InstantiateRepository<IBusItineraryRepository>();

        #endregion
        #region [Repositories]
        //public IBranchRepository BranchRepository => (IBranchRepository)InstantiateRepository<BranchRepository>();
        //public IBusinessBizcodeIdMappingRepository BusinessBizcodeIdMappingRepository => (IBusinessBizcodeIdMappingRepository)InstantiateRepository<BusinessBizcodeIdMappingRepository>();
        #endregion
        public UnitOfWork(BusRouteDbContext dbContext)
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
