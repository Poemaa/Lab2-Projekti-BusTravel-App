using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using User.Services.Interfaces;
using Microsoft.IdentityModel.JsonWebTokens;

[Route("api/user")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(
        IUserService userService)
    {
        _userService = userService;
    }


    //[HttpPost("login")]
    //public async Task<IActionResult> Login([FromBody] LoginModel model)
    //{
    //    // Perform login logic

    //    var user = await _userManager.FindByEmailAsync(model.Email);

    //    if (user == null)
    //    {
    //        // User not found
    //        return Unauthorized();
    //    }

    //    var result = await _signInManager.PasswordSignInAsync(user, model.Password, false, lockoutOnFailure: false);

    //    if (!result.Succeeded)
    //    {
    //        // Invalid login credentials
    //        return Unauthorized();
    //    }

    //    // Generate JWT token
    //    var token = GenerateJwtToken(user);

    //    // Return the token as a response
    //    return Ok(new { Token = token });
    //}

    [HttpGet("getToken")]
    [Authorize]
    public async Task<IActionResult> GetJWTToken()
    {
        var token = await _userService.GenerateJWT(User.Claims.ToArray());
        return Ok(token);
    }

    [HttpPut("changeRole")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> ChangeRole(string email, string role)
    {
        await _userService.UpdateRoleUser(email, role);
        return Ok($"Updated role {role} for user with email {email}");
    }


    [HttpGet("currentUser")]
    [Authorize]
    public async Task<IActionResult> GetRole()
    {
        var email = User.FindFirst("email");
        var user = await _userService.GetByEmailAsync(email.Value);
        return Ok(user);
    }
}
