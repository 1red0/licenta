using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace monitKars.Migrations
{
    /// <inheritdoc />
    public partial class PolishControllers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "address",
                table: "Organisation");

            migrationBuilder.DropColumn(
                name: "name",
                table: "Organisation");

            migrationBuilder.DropColumn(
                name: "color",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "engine",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "insurance",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "maintenanceStatus",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "manufacturer",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "milage",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "model",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "oil",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "ownerID",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "periodicRevision",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "plateNumber",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "tireSizes",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "type",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "vignette",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "vinNumber",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "year",
                table: "Car");

            migrationBuilder.RenameColumn(
                name: "userName",
                table: "User",
                newName: "UserName");

            migrationBuilder.RenameColumn(
                name: "role",
                table: "User",
                newName: "Role");

            migrationBuilder.RenameColumn(
                name: "password",
                table: "User",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "organisationID",
                table: "User",
                newName: "OrganisationID");

            migrationBuilder.RenameColumn(
                name: "lastName",
                table: "User",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "gender",
                table: "User",
                newName: "Gender");

            migrationBuilder.RenameColumn(
                name: "firstName",
                table: "User",
                newName: "FirstName");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "User",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "dateOfBirth",
                table: "User",
                newName: "DateOfBirth");

            migrationBuilder.RenameColumn(
                name: "carID",
                table: "User",
                newName: "CarID");

            migrationBuilder.RenameColumn(
                name: "userID",
                table: "User",
                newName: "UserID");

            migrationBuilder.RenameColumn(
                name: "numberOfDrivers",
                table: "Organisation",
                newName: "NumberOfDrivers");

            migrationBuilder.RenameColumn(
                name: "numberOfCars",
                table: "Organisation",
                newName: "NumberOfCars");

            migrationBuilder.RenameColumn(
                name: "organisationID",
                table: "Organisation",
                newName: "OrganisationID");

            migrationBuilder.RenameColumn(
                name: "carName",
                table: "Car",
                newName: "CarName");

            migrationBuilder.RenameColumn(
                name: "carID",
                table: "Car",
                newName: "CarID");

            migrationBuilder.AlterColumn<string>(
                name: "UserName",
                table: "User",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "Role",
                table: "User",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "phone",
                table: "User",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "User",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<int>(
                name: "OrganisationID",
                table: "User",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<string>(
                name: "LastName",
                table: "User",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "Gender",
                table: "User",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "FirstName",
                table: "User",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "User",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "DateOfBirth",
                table: "User",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<int>(
                name: "CarID",
                table: "User",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<Guid>(
                name: "UserID",
                table: "User",
                type: "uuid",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer")
                .OldAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AlterColumn<int>(
                name: "NumberOfDrivers",
                table: "Organisation",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "NumberOfCars",
                table: "Organisation",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<Guid>(
                name: "OrganisationID",
                table: "Organisation",
                type: "uuid",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer")
                .OldAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddColumn<string>(
                name: "OrganisationAddress",
                table: "Organisation",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OrganisationMail",
                table: "Organisation",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OrganisationName",
                table: "Organisation",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OrganisationPhone",
                table: "Organisation",
                type: "text",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CarName",
                table: "Car",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<Guid>(
                name: "CarID",
                table: "Car",
                type: "uuid",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer")
                .OldAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddColumn<string>(
                name: "CarColor",
                table: "Car",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarEngine",
                table: "Car",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarInsurance",
                table: "Car",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarMaintenanceStatus",
                table: "Car",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarManufacturer",
                table: "Car",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarMilage",
                table: "Car",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarModel",
                table: "Car",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarOil",
                table: "Car",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CarOwnerID",
                table: "Car",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarPeriodicRevision",
                table: "Car",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarPlateNumber",
                table: "Car",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string[]>(
                name: "CarTireSizes",
                table: "Car",
                type: "text[]",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarType",
                table: "Car",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarVignette",
                table: "Car",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CarVinNumber",
                table: "Car",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CarYear",
                table: "Car",
                type: "integer",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OrganisationAddress",
                table: "Organisation");

            migrationBuilder.DropColumn(
                name: "OrganisationMail",
                table: "Organisation");

            migrationBuilder.DropColumn(
                name: "OrganisationName",
                table: "Organisation");

            migrationBuilder.DropColumn(
                name: "OrganisationPhone",
                table: "Organisation");

            migrationBuilder.DropColumn(
                name: "CarColor",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarEngine",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarInsurance",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarMaintenanceStatus",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarManufacturer",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarMilage",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarModel",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarOil",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarOwnerID",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarPeriodicRevision",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarPlateNumber",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarTireSizes",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarType",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarVignette",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarVinNumber",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarYear",
                table: "Car");

            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "User",
                newName: "userName");

            migrationBuilder.RenameColumn(
                name: "Role",
                table: "User",
                newName: "role");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "User",
                newName: "password");

            migrationBuilder.RenameColumn(
                name: "OrganisationID",
                table: "User",
                newName: "organisationID");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "User",
                newName: "lastName");

            migrationBuilder.RenameColumn(
                name: "Gender",
                table: "User",
                newName: "gender");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "User",
                newName: "firstName");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "User",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "DateOfBirth",
                table: "User",
                newName: "dateOfBirth");

            migrationBuilder.RenameColumn(
                name: "CarID",
                table: "User",
                newName: "carID");

            migrationBuilder.RenameColumn(
                name: "UserID",
                table: "User",
                newName: "userID");

            migrationBuilder.RenameColumn(
                name: "NumberOfDrivers",
                table: "Organisation",
                newName: "numberOfDrivers");

            migrationBuilder.RenameColumn(
                name: "NumberOfCars",
                table: "Organisation",
                newName: "numberOfCars");

            migrationBuilder.RenameColumn(
                name: "OrganisationID",
                table: "Organisation",
                newName: "organisationID");

            migrationBuilder.RenameColumn(
                name: "CarName",
                table: "Car",
                newName: "carName");

            migrationBuilder.RenameColumn(
                name: "CarID",
                table: "Car",
                newName: "carID");

            migrationBuilder.AlterColumn<string>(
                name: "phone",
                table: "User",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "userName",
                table: "User",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "role",
                table: "User",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "password",
                table: "User",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "organisationID",
                table: "User",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "lastName",
                table: "User",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "gender",
                table: "User",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "firstName",
                table: "User",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "email",
                table: "User",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "dateOfBirth",
                table: "User",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "carID",
                table: "User",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "userID",
                table: "User",
                type: "integer",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uuid")
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AlterColumn<int>(
                name: "numberOfDrivers",
                table: "Organisation",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "numberOfCars",
                table: "Organisation",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "organisationID",
                table: "Organisation",
                type: "integer",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uuid")
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddColumn<string>(
                name: "address",
                table: "Organisation",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "name",
                table: "Organisation",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "carName",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "carID",
                table: "Car",
                type: "integer",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uuid")
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddColumn<string>(
                name: "color",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "engine",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "insurance",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "maintenanceStatus",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "manufacturer",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "milage",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "model",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "oil",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "ownerID",
                table: "Car",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "periodicRevision",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "plateNumber",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string[]>(
                name: "tireSizes",
                table: "Car",
                type: "text[]",
                nullable: false,
                defaultValue: new string[0]);

            migrationBuilder.AddColumn<string>(
                name: "type",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "vignette",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "vinNumber",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "year",
                table: "Car",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
