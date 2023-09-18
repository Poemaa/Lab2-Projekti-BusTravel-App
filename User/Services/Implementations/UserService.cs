using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
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

        public async Task<bool> UpdateRoleUser(string email, string role)
        {
            var user = await GetByEmailAsync(email);
            user.Role = role;
            _unitOfWork.UserRepository.Update(user);
            return await _unitOfWork.CompleteAsync();
        }

        public async Task<string> GenerateJWT(Claim[] claims)
        {
            var tokenHandler = new JwtSecurityTokenHandler();


            // Create the JWT token
            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(30), // Set token expiration time
                notBefore: DateTime.UtcNow,
                signingCredentials: null // Pass null to omit signing
            );

            // Generate the token string
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }
    }
}
