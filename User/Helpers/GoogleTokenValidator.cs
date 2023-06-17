using System.DirectoryServices;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Server.HttpSys;
using Microsoft.IdentityModel.Tokens;
using User.Services.Interfaces;

namespace User.Helpers
{
    public class GoogleTokenValidator : JwtSecurityTokenHandler, ISecurityTokenValidator
    {
        private readonly JwtSecurityTokenHandler _tokenHandler;
        private readonly IUserService _userService;

        public GoogleTokenValidator(IUserService userService)
        {
            _userService = userService;
            _tokenHandler = new JwtSecurityTokenHandler();
        }

        public bool CanValidateToken => true;

        public int MaximumTokenSizeInBytes { get; set; } = TokenValidationParameters.DefaultMaximumTokenSizeInBytes;

        public bool CanReadToken(string securityToken)
        {
            return _tokenHandler.CanReadToken(securityToken);
        }

        ClaimsPrincipal ISecurityTokenValidator.ValidateToken(string securityToken, TokenValidationParameters validationParameters, out SecurityToken validatedToken)
        {
            validatedToken = null;
            var settings = new GoogleJsonWebSignature.ValidationSettings
            {
                Audience = new[] { "430285706066-gcgb7a7imnpj4n4qi7u82jho1hqivpib.apps.googleusercontent.com" },
                ExpirationTimeClockTolerance = TimeSpan.FromMinutes(10),
            };
            var payload = GoogleJsonWebSignature.ValidateAsync(securityToken, settings).Result; // here is where I delegate to Google to validate

            var user = _userService.GetByEmailAsync(payload.Email).Result;
            
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, payload.Name),
                new Claim(ClaimTypes.Name, payload.Name),
                new Claim(JwtRegisteredClaimNames.FamilyName, payload.FamilyName),
                new Claim(JwtRegisteredClaimNames.GivenName, payload.GivenName),
                new Claim(JwtRegisteredClaimNames.Email, payload.Email),
                new Claim(JwtRegisteredClaimNames.Sub, payload.Subject),
                new Claim(JwtRegisteredClaimNames.Iss, payload.Issuer),
            };
            if (user != null)
            {
                // User exists, add role claim
                claims.Add(new Claim(ClaimTypes.Role, user.Role));
            }
            else
            {
                // User doesn't exist, add user with default role
                Models.Entities.User newUser = new Models.Entities.User
                {
                    Email = payload.Email,
                    FirstName = payload.GivenName,
                    LastName = payload.FamilyName,
                    Role = "User",
                    UserId = payload.JwtId
                };
                _userService.CreateUser(newUser).
                    ContinueWith(t => Console.WriteLine(t.Exception),
                        TaskContinuationOptions.OnlyOnFaulted); ;
                claims.Add(new Claim(ClaimTypes.Role, "User"));
            }
            try
            {
                var principle = new ClaimsPrincipal();
                principle.AddIdentity(new ClaimsIdentity(claims, "Google"));
                validatedToken = new JwtSecurityToken(securityToken);
                return principle;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;

            }
        }
    }
}
