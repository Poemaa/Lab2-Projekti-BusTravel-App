using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BusRoute.Migrations
{
    /// <inheritdoc />
    public partial class AddedRelationships : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BusItineraryBusLine");

            migrationBuilder.DropTable(
                name: "BusLineLocation");

            migrationBuilder.DropColumn(
                name: "ItineraryId",
                table: "BusLines");

            migrationBuilder.AddColumn<int>(
                name: "BusLineId",
                table: "BusItineraries",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_BusItineraries_BusLineId",
                table: "BusItineraries",
                column: "BusLineId");

            migrationBuilder.AddForeignKey(
                name: "FK_BusItineraries_BusLines_BusLineId",
                table: "BusItineraries",
                column: "BusLineId",
                principalTable: "BusLines",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BusItineraries_BusLines_BusLineId",
                table: "BusItineraries");

            migrationBuilder.DropIndex(
                name: "IX_BusItineraries_BusLineId",
                table: "BusItineraries");

            migrationBuilder.DropColumn(
                name: "BusLineId",
                table: "BusItineraries");

            migrationBuilder.AddColumn<int>(
                name: "ItineraryId",
                table: "BusLines",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "BusItineraryBusLine",
                columns: table => new
                {
                    BusItinerariesBusItineraryId = table.Column<int>(type: "int", nullable: false),
                    BusLinesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusItineraryBusLine", x => new { x.BusItinerariesBusItineraryId, x.BusLinesId });
                    table.ForeignKey(
                        name: "FK_BusItineraryBusLine_BusItineraries_BusItinerariesBusItineraryId",
                        column: x => x.BusItinerariesBusItineraryId,
                        principalTable: "BusItineraries",
                        principalColumn: "BusItineraryId",
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
        }
    }
}
