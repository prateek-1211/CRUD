using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Business> Businesses { get; set; }
    // public DbSet<Category> Categories { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Business>()
            .Property(b => b.Rating)
            .HasColumnType("decimal(18,2)"); // ✅ Precision added correctly
    }
}
