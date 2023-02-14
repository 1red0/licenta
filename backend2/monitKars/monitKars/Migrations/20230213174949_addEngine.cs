using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace monitKars.Migrations
{
    /// <inheritdoc />
    public partial class addEngine : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "engine",
                table: "Car",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "engine",
                table: "Car");
        }
    }
}
