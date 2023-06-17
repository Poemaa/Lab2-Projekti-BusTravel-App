using Microsoft.EntityFrameworkCore;
using User.Data.UnitOfWork;
using User.Services.Interfaces;

namespace User.Services.Implementations
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<Models.Entities.User?> GetByEmailAsync(string userEmail)
        {
            return await _unitOfWork.UserRepository.GetAll().FirstOrDefaultAsync(u => u.Email == userEmail);
        }

        public async Task<bool> CreateUser(Models.Entities.User user)
        {
            await _unitOfWork.UserRepository.CreateAsync(user);
            return await _unitOfWork.CompleteAsync();
        }
    }
}
