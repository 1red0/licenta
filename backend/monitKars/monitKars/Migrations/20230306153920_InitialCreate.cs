using System.Numerics;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace monitKars.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
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
                    CarOwnerID = table.Column<string>(type: "text", nullable: true),
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
                    CarType = table.Column<string>(type: "text", nullable: true),
                    CarOrganisation = table.Column<string>(type: "text", nullable: true)
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
                    Id = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: true),
                    Emailconstraint = table.Column<string>(name: "Email_constraint", type: "text", nullable: true),
                    Emailverified = table.Column<string>(name: "Email_verified", type: "text", nullable: true),
                    Enabled = table.Column<bool>(type: "boolean", nullable: true),
                    Federationlink = table.Column<string>(name: "Federation_link", type: "text", nullable: true),
                    Firstname = table.Column<string>(name: "First_name", type: "text", nullable: true),
                    Lastname = table.Column<string>(name: "Last_name", type: "text", nullable: true),
                    RealmId = table.Column<string>(name: "Realm_Id", type: "text", nullable: true),
                    Username = table.Column<string>(type: "text", nullable: true),
                    Createdtimestamp = table.Column<BigInteger>(name: "Created_timestamp", type: "numeric", nullable: true),
                    Serviceaccountclientlink = table.Column<string>(name: "Service_account_client_link", type: "text", nullable: true),
                    Notbefore = table.Column<string>(name: "Not_before", type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
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
