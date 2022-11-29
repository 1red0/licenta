namespace monitKars.Helpers
{
    using Microsoft.EntityFrameworkCore;
    public class PostgresqlDataContext : DataContext
    {
        public PostgresqlDataContext(IConfiguration configuration) : base(configuration) { }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sqlite database
            options.UseNpgsql(Configuration.GetConnectionString("WebApiDatabase"));
        }
    }
}
