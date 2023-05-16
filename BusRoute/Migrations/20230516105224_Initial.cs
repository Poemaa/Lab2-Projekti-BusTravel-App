using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BusRoute.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BusItineraries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DepartureTime = table.Column<TimeOnly>(type: "time", nullable: false),
                    ArrivalTime = table.Column<TimeOnly>(type: "time", nullable: false),
                    Duration = table.Column<TimeSpan>(type: "time", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusItineraries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    CompanyId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NumberOfBuses = table.Column<int>(type: "int", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.CompanyId);
                });

            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    LocationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LocationName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locations", x => x.LocationId);
                });

            migrationBuilder.CreateTable(
                name: "BusLines",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DepartureCityId = table.Column<int>(type: "int", nullable: false),
                    ArrivalCityId = table.Column<int>(type: "int", nullable: false),
                    ItineraryId = table.Column<int>(type: "int", nullable: false),
                    CompanyId = table.Column<int>(type: "int", nullable: false),
                    NumberOfSeats = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusLines", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BusLines_Companies_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companies",
                        principalColumn: "CompanyId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BusLines_Locations_ArrivalCityId",
                        column: x => x.ArrivalCityId,
                        principalTable: "Locations",
                        principalColumn: "LocationId");
                    table.ForeignKey(
                        name: "FK_BusLines_Locations_DepartureCityId",
                        column: x => x.DepartureCityId,
                        principalTable: "Locations",
                        principalColumn: "LocationId");
                });

            migrationBuilder.CreateTable(
                name: "BusItineraryBusLine",
                columns: table => new
                {
                    BusItinerariesId = table.Column<int>(type: "int", nullable: false),
                    BusLinesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusItineraryBusLine", x => new { x.BusItinerariesId, x.BusLinesId });
                    table.ForeignKey(
                        name: "FK_BusItineraryBusLine_BusItineraries_BusItinerariesId",
                        column: x => x.BusItinerariesId,
                        principalTable: "BusItineraries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BusItineraryBusLine_BusLines_BusLinesId",
                        column: x => x.BusLinesId,
                        principalTable: "BusLines",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BusLineLocation",
                columns: table => new
                {
                    BusStopsId = table.Column<int>(type: "int", nullable: false),
                    BusStopsLocationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusLineLocation", x => new { x.BusStopsId, x.BusStopsLocationId });
                    table.ForeignKey(
                        name: "FK_BusLineLocation_BusLines_BusStopsId",
                        column: x => x.BusStopsId,
                        principalTable: "BusLines",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BusLineLocation_Locations_BusStopsLocationId",
                        column: x => x.BusStopsLocationId,
                        principalTable: "Locations",
                        principalColumn: "LocationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BusItineraryBusLine_BusLinesId",
                table: "BusItineraryBusLine",
                column: "BusLinesId");

            migrationBuilder.CreateIndex(
                name: "IX_BusLineLocation_BusStopsLocationId",
                table: "BusLineLocation",
                column: "BusStopsLocationId");

            migrationBuilder.CreateIndex(
                name: "IX_BusLines_ArrivalCityId",
                table: "BusLines",
                column: "ArrivalCityId");

            migrationBuilder.CreateIndex(
                name: "IX_BusLines_CompanyId",
                table: "BusLines",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_BusLines_DepartureCityId",
                table: "BusLines",
                column: "DepartureCityId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BusItineraryBusLine");

            migrationBuilder.DropTable(
                name: "BusLineLocation");

            migrationBuilder.DropTable(
                name: "BusItineraries");

            migrationBuilder.DropTable(
                name: "BusLines");

            migrationBuilder.DropTable(
                name: "Companies");

            migrationBuilder.DropTable(
                name: "Locations");
        }
    }
}
