using System.Text;
using BusFeedback.Data;
using BusFeedback;
using BusFeedback.Models.Entities;
using BusFeedback.DataAccess;
using BusFeedback.Data.UnitOfWork;
using BusFeedback.Middlewares;
using BusFeedback.services.implementations;
using BusFeedback.services.interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<IFeedbackService, FeedbackService>();

/*builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidIssuer = "Zekaj",
            ValidAudience = "Zekaj",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ZekajZekajZekajZekajZekajZekajZekajZekajZekajZekajZekajZekajZekajZekajZekajZekaj")),
            ValidateLifetime = false,
            ValidateIssuerSigningKey = true
        };
    });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("RequireAdminRole", policy =>
        policy.RequireClaim("Role", "Admin"));
});
*/
builder.Services.Configure<FeedbackDatabaseSettings>(
    builder.Configuration.GetSection(nameof(FeedbackDatabaseSettings)));

builder.Services.AddSingleton<IFeedbackDatabaseSettings>(sp =>
    sp.GetRequiredService<IOptions<FeedbackDatabaseSettings>>().Value);

builder.Services.AddSingleton<FeedbackService>();

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

// requires using Microsoft.Extensions.Options

var app = builder.Build();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

//using var scope = app.Services.CreateScope();
//var dbContext = scope.ServiceProvider.GetService<BusFeedbackDbContext>();
//await dbContext!.Database.MigrateAsync();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseCors(a => a.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader().WithExposedHeaders("Permissions-Policy"));

app.UseMiddleware<ExceptionHandlingMiddleware>();

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
