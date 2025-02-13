// using Microsoft.EntityFrameworkCore;

// var builder = WebApplication.CreateBuilder(args);

// // ✅ CORS Enable Karo (Correct Name Use Karo)
// builder.Services.AddCors(options =>
// {
//     options.AddPolicy("AllowReactApp",
//         policy => policy.WithOrigins("http://localhost:3000") // 👈 Sirf React App Allow Karo
//                         .AllowAnyMethod()
//                         .AllowAnyHeader());
// });

// // ✅ Database Setup
// builder.Services.AddDbContext<ApplicationDbContext>(options =>
//     options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// // ✅ Authentication & Authorization Setup
// builder.Services.AddAuthentication(); // Ensure authentication is properly configured
// builder.Services.AddAuthorization();

// builder.Services.AddControllers();

// var app = builder.Build();

// if (app.Environment.IsDevelopment())
// {
//     app.UseDeveloperExceptionPage();
// }

// app.UseHttpsRedirection();

// // ✅ CORS Middleware Add Karo (yeh routing se pehle hona chahiye)
// app.UseCors("AllowReactApp");

// app.UseRouting(); // 👈 Routing ko properly setup karo

// app.UseAuthentication(); // 👈 Authentication Middleware Add Karo
// app.UseAuthorization();  // 👈 Authorization Middleware bhi hona chahiye

// app.MapControllers();

// app.Run();

using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader());
});

var app = builder.Build();

app.UseCors("AllowReactApp");
app.UseAuthorization();
app.MapControllers();
app.Run();
