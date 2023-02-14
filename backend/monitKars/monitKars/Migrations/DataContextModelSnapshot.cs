﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using monitKars.Data;

#nullable disable

namespace monitKars.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("monitKars.Entities.Car", b =>
                {
                    b.Property<Guid>("CarID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("CarColor")
                        .HasColumnType("text");

                    b.Property<string>("CarEngine")
                        .HasColumnType("text");

                    b.Property<string>("CarInsurance")
                        .HasColumnType("text");

                    b.Property<string>("CarMaintenanceStatus")
                        .HasColumnType("text");

                    b.Property<string>("CarManufacturer")
                        .HasColumnType("text");

                    b.Property<string>("CarMilage")
                        .HasColumnType("text");

                    b.Property<string>("CarModel")
                        .HasColumnType("text");

                    b.Property<string>("CarName")
                        .HasColumnType("text");

                    b.Property<string>("CarOil")
                        .HasColumnType("text");

                    b.Property<int?>("CarOwnerID")
                        .HasColumnType("integer");

                    b.Property<string>("CarPeriodicRevision")
                        .HasColumnType("text");

                    b.Property<string>("CarPlateNumber")
                        .HasColumnType("text");

                    b.Property<string[]>("CarTireSizes")
                        .HasColumnType("text[]");

                    b.Property<string>("CarType")
                        .HasColumnType("text");

                    b.Property<string>("CarVignette")
                        .HasColumnType("text");

                    b.Property<string>("CarVinNumber")
                        .HasColumnType("text");

                    b.Property<int?>("CarYear")
                        .HasColumnType("integer");

                    b.HasKey("CarID");

                    b.ToTable("Car", (string)null);
                });

            modelBuilder.Entity("monitKars.Entities.Organisation", b =>
                {
                    b.Property<Guid>("OrganisationID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<int?>("NumberOfCars")
                        .HasColumnType("integer");

                    b.Property<int?>("NumberOfDrivers")
                        .HasColumnType("integer");

                    b.Property<string>("OrganisationAddress")
                        .HasColumnType("text");

                    b.Property<string>("OrganisationMail")
                        .HasColumnType("text");

                    b.Property<string>("OrganisationName")
                        .HasColumnType("text");

                    b.Property<string>("OrganisationPhone")
                        .HasColumnType("text");

                    b.HasKey("OrganisationID");

                    b.ToTable("Organisation", (string)null);
                });

            modelBuilder.Entity("monitKars.Entities.User", b =>
                {
                    b.Property<Guid>("UserID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<int?>("CarID")
                        .HasColumnType("integer");

                    b.Property<string>("DateOfBirth")
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .HasColumnType("text");

                    b.Property<string>("Gender")
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .HasColumnType("text");

                    b.Property<int?>("OrganisationID")
                        .HasColumnType("integer");

                    b.Property<string>("Password")
                        .HasColumnType("text");

                    b.Property<string>("Role")
                        .HasColumnType("text");

                    b.Property<string>("UserName")
                        .HasColumnType("text");

                    b.Property<string>("phone")
                        .HasColumnType("text");

                    b.HasKey("UserID");

                    b.ToTable("User", (string)null);
                });
#pragma warning restore 612, 618
        }
    }
}
