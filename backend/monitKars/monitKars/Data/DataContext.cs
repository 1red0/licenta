using Microsoft.EntityFrameworkCore;
using monitKars.Entities;

namespace monitKars.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
        : base(options)
        { }
        public DbSet<Organisation> Organisations { get; set; }
        public DbSet<Car> Cars { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Organisation>().ToTable("Organisation");
            modelBuilder.Entity<Car>().ToTable("Car");
        }
    }
}
