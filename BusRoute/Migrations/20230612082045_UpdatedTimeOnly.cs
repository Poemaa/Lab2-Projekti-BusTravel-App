using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BusRoute.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedTimeOnly : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BusItineraryBusLine_BusItineraries_BusItinerariesId",
                table: "BusItineraryBusLine");

            migrationBuilder.RenameColumn(
                name: "BusItinerariesId",
                table: "BusItineraryBusLine",
                newName: "BusItinerariesBusItineraryId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "BusItineraries",
                newName: "BusItineraryId");

            migrationBuilder.AlterColumn<string>(
                name: "DepartureTime",
                table: "BusItineraries",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(TimeOnly),
                oldType: "time");

            migrationBuilder.AlterColumn<string>(
                name: "ArrivalTime",
                table: "BusItineraries",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(TimeOnly),
                oldType: "time");

            migrationBuilder.AddForeignKey(
                name: "FK_BusItineraryBusLine_BusItineraries_BusItinerariesBusItineraryId",
                table: "BusItineraryBusLine",
                column: "BusItinerariesBusItineraryId",
                principalTable: "BusItineraries",
                principalColumn: "BusItineraryId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BusItineraryBusLine_BusItineraries_BusItinerariesBusItineraryId",
                table: "BusItineraryBusLine");

            migrationBuilder.RenameColumn(
                name: "BusItinerariesBusItineraryId",
                table: "BusItineraryBusLine",
                newName: "BusItinerariesId");

            migrationBuilder.RenameColumn(
                name: "BusItineraryId",
                table: "BusItineraries",
                newName: "Id");

            migrationBuilder.AlterColumn<TimeOnly>(
                name: "DepartureTime",
                table: "BusItineraries",
                type: "time",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<TimeOnly>(
                name: "ArrivalTime",
                table: "BusItineraries",
                type: "time",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddForeignKey(
                name: "FK_BusItineraryBusLine_BusItineraries_BusItinerariesId",
                table: "BusItineraryBusLine",
                column: "BusItinerariesId",
                principalTable: "BusItineraries",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
