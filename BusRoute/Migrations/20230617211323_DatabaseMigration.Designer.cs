﻿// <auto-generated />
using System;
using BusRoute.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BusRoute.Migrations
{
    [DbContext(typeof(BusRouteDbContext))]
    [Migration("20230617211323_DatabaseMigration")]
    partial class DatabaseMigration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("BusRoute.Models.Entities.BusItinerary", b =>
                {
                    b.Property<int>("BusItineraryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BusItineraryId"));

                    b.Property<string>("ArrivalTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("BusLineId")
                        .HasColumnType("int");

                    b.Property<string>("DepartureTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<TimeSpan>("Duration")
                        .HasColumnType("time");

                    b.HasKey("BusItineraryId");

                    b.HasIndex("BusLineId");

                    b.ToTable("BusItineraries");
                });

            modelBuilder.Entity("BusRoute.Models.Entities.BusLine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("ArrivalCityId")
                        .HasColumnType("int");

                    b.Property<int>("CompanyId")
                        .HasColumnType("int");

                    b.Property<int>("DepartureCityId")
                        .HasColumnType("int");

                    b.Property<int>("NumberOfSeats")
                        .HasColumnType("int");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("ArrivalCityId");

                    b.HasIndex("CompanyId");

                    b.HasIndex("DepartureCityId");

                    b.ToTable("BusLines");
                });

            modelBuilder.Entity("BusRoute.Models.Entities.Company", b =>
                {
                    b.Property<int>("CompanyId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CompanyId"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NumberOfBuses")
                        .HasColumnType("int");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CompanyId");

                    b.ToTable("Companies");
                });

            modelBuilder.Entity("BusRoute.Models.Entities.Location", b =>
                {
                    b.Property<int>("LocationId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("LocationId"));

                    b.Property<double>("Latitude")
                        .HasColumnType("float");

                    b.Property<string>("LocationName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Longitude")
                        .HasColumnType("float");

                    b.HasKey("LocationId");

                    b.ToTable("Locations");
                });

            modelBuilder.Entity("BusRoute.Models.Entities.BusItinerary", b =>
                {
                    b.HasOne("BusRoute.Models.Entities.BusLine", "BusLine")
                        .WithMany("BusItineraries")
                        .HasForeignKey("BusLineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("BusLine");
                });

            modelBuilder.Entity("BusRoute.Models.Entities.BusLine", b =>
                {
                    b.HasOne("BusRoute.Models.Entities.Location", "ArrivalCity")
                        .WithMany("BusRoutesArrival")
                        .HasForeignKey("ArrivalCityId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("BusRoute.Models.Entities.Company", "Company")
                        .WithMany("BusLines")
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BusRoute.Models.Entities.Location", "DepartureCity")
                        .WithMany("BusRoutesDeparture")
                        .HasForeignKey("DepartureCityId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("ArrivalCity");

                    b.Navigation("Company");

                    b.Navigation("DepartureCity");
                });

            modelBuilder.Entity("BusRoute.Models.Entities.BusLine", b =>
                {
                    b.Navigation("BusItineraries");
                });

            modelBuilder.Entity("BusRoute.Models.Entities.Company", b =>
                {
                    b.Navigation("BusLines");
                });

            modelBuilder.Entity("BusRoute.Models.Entities.Location", b =>
                {
                    b.Navigation("BusRoutesArrival");

                    b.Navigation("BusRoutesDeparture");
                });
#pragma warning restore 612, 618
        }
    }
}