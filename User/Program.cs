using Microsoft.AspNetCore.Authentication;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

// Add services to the container.
builder.Services.AddAuthentication().AddGoogle(googleOptions =>
{
    googleOptions.ClientId = "430285706066-gcgb7a7imnpj4n4qi7u82jho1hqivpib.apps.googleusercontent.com";
    googleOptions.ClientSecret = "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";
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
