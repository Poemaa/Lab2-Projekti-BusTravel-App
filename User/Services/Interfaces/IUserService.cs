﻿namespace User.Services.Interfaces
{
    public interface IUserService
    {
        Task<Models.Entities.User?> GetByEmailAsync(string userEmail);
        Task<bool> CreateUser(Models.Entities.User user);
    }
}
