using BusRoute.Data;
using BusRoute.Data.UnitOfWork;
using BusRoute.Middlewares;
using BusRoute.services.implementations;
using BusRoute.services.Implementations;
//using BusRoute.Services.Implementations;
using BusRoute.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<ILocationService, LocationService>();
builder.Services.AddScoped<ICompanyService, CompanyService>();
builder.Services.AddScoped<IBusItineraryService, BusItineraryService>();
builder.Services.AddScoped<IBusLineService, BusLineService>();


builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<BusRouteDbContext>(opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("SQLConnectionString"),x => x.UseDateOnlyTimeOnly()));
var app = builder.Build();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

app.UseMiddleware<ExceptionHandlingMiddleware>();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
