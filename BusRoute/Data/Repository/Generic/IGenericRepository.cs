using Microsoft.EntityFrameworkCore.Query;
using System.Linq.Expressions;


namespace BusRoute.Data.Repository.Generic
{
    public interface IGenericRepository<Entity> where Entity : class
    {
        IQueryable<Entity> GetByCondition(Expression<Func<Entity, bool>> condition);
        IQueryable<Entity> GetByConditionWithIncludes(Expression<Func<Entity, bool>> expression, string? includeRelations = null);
        IQueryable<Entity> GetAll();
        IQueryable<Entity> GetById(Expression<Func<Entity, bool>> condition);
        void Create(Entity entity);
        void CreateRange(List<Entity> entities);
        Task CreateAsync(Entity entity);
        Task CreateRangeAsync(List<Entity> entities);
        Task DeleteWithConditionAsync(Expression<Func<Entity, bool>> condition, CancellationToken cancellationToken = default);
        void Delete(Entity entity);
        void DeleteRange(List<Entity> entities);
        void Update(Entity entity);
        void UpdateRange(List<Entity> entities);
    }
}
