using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace monitKars.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigrate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Car",
                columns: table => new
                {
                    CarID = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CarName = table.Column<string>(type: "text", nullable: true),
                    CarYear = table.Column<int>(type: "integer", nullable: true),
                    CarColor = table.Column<string>(type: "text", nullable: true),
                    CarVignette = table.Column<string>(type: "text", nullable: true),
                    CarInsurance = table.Column<string>(type: "text", nullable: true),
                    CarOwnerID = table.Column<int>(type: "integer", nullable: true),
                    CarMilage = table.Column<string>(type: "text", nullable: true),
                    CarMaintenanceStatus = table.Column<string>(type: "text", nullable: true),
                    CarManufacturer = table.Column<string>(type: "text", nullable: true),
                    CarModel = table.Column<string>(type: "text", nullable: true),
                    CarEngine = table.Column<string>(type: "text", nullable: true),
                    CarTireSizes = table.Column<string[]>(type: "text[]", nullable: true),
                    CarOil = table.Column<string>(type: "text", nullable: true),
                    CarPeriodicRevision = table.Column<string>(type: "text", nullable: true),
                    CarPlateNumber = table.Column<string>(type: "text", nullable: true),
                    CarVinNumber = table.Column<string>(type: "text", nullable: true),
                    CarType = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Car", x => x.CarID);
                });

            migrationBuilder.CreateTable(
                name: "Organisation",
                columns: table => new
                {
                    OrganisationID = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    OrganisationName = table.Column<string>(type: "text", nullable: true),
                    OrganisationMail = table.Column<string>(type: "text", nullable: true),
                    OrganisationPhone = table.Column<string>(type: "text", nullable: true),
                    OrganisationAddress = table.Column<string>(type: "text", nullable: true),
                    NumberOfCars = table.Column<int>(type: "integer", nullable: true),
                    NumberOfDrivers = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Organisation", x => x.OrganisationID);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FirstName = table.Column<string>(type: "text", nullable: true),
                    LastName = table.Column<string>(type: "text", nullable: true),
                    UserName = table.Column<string>(type: "text", nullable: true),
                    DateOfBirth = table.Column<string>(type: "text", nullable: true),
                    Email = table.Column<string>(type: "text", nullable: true),
                    phone = table.Column<string>(type: "text", nullable: true),
                    Gender = table.Column<string>(type: "text", nullable: true),
                    Role = table.Column<string>(type: "text", nullable: true),
                    OrganisationID = table.Column<int>(type: "integer", nullable: true),
                    CarID = table.Column<int>(type: "integer", nullable: true),
                    Password = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Car");

            migrationBuilder.DropTable(
                name: "Organisation");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
