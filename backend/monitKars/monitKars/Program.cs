using Microsoft.EntityFrameworkCore;
using monitKars.Data;
using System;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("WebApiDatabase"));
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var CORS = "CORS";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: CORS,
                      builder =>
                      {
                          builder.WithOrigins("*");
                      });
});


var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider
        .GetRequiredService<DataContext>();

    dbContext.Database.Migrate();
}

app.UseSwagger();
app.UseSwaggerUI();


app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(origin => true)
    .AllowCredentials());

app.UseAuthorization();

app.MapControllers();

app.Run();
