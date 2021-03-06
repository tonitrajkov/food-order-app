// <auto-generated />
using System;
using FoodOrderApp.Service.DbContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FoodOrderApp.Service.Migrations
{
    [DbContext(typeof(FoodOrderDbContext))]
    [Migration("20200426092911_note_not_required")]
    partial class note_not_required
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoCategory", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(200);

                    b.HasKey("CategoryId");

                    b.ToTable("Category");
                });

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoIngredient", b =>
                {
                    b.Property<int>("IngredientId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(150);

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(10,4)");

                    b.HasKey("IngredientId");

                    b.ToTable("Ingredient");
                });

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoIngredientCategory", b =>
                {
                    b.Property<int>("CategoryId");

                    b.Property<int>("IngredientId");

                    b.HasKey("CategoryId", "IngredientId");

                    b.HasIndex("IngredientId");

                    b.ToTable("IngredientCategory");
                });

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoOrder", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Note")
                        .HasMaxLength(500);

                    b.Property<DateTime>("OrderDate");

                    b.Property<string>("OrderNumber")
                        .IsRequired()
                        .HasMaxLength(20);

                    b.Property<int>("OrderStatus");

                    b.Property<decimal>("TotalPrice")
                        .HasColumnType("decimal(10,4)");

                    b.HasKey("OrderId");

                    b.ToTable("Order");
                });

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoOrderItem", b =>
                {
                    b.Property<int>("OrderItemId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Note")
                        .HasMaxLength(500);

                    b.Property<int>("OrderId");

                    b.Property<int>("ProductId");

                    b.Property<int>("Quantity");

                    b.Property<decimal>("TotalPrice")
                        .HasColumnType("decimal(10,4)");

                    b.Property<decimal>("UnitPrice")
                        .HasColumnType("decimal(10,4)");

                    b.HasKey("OrderItemId");

                    b.HasIndex("OrderId");

                    b.HasIndex("ProductId")
                        .IsUnique();

                    b.ToTable("OrderItem");
                });

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoOrderItemIngredient", b =>
                {
                    b.Property<int>("OrderItemId");

                    b.Property<int>("IngredientId");

                    b.HasKey("OrderItemId", "IngredientId");

                    b.HasIndex("IngredientId");

                    b.ToTable("OrderItemIngredient");
                });

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoPayment", b =>
                {
                    b.Property<int>("PaymentId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("Amount")
                        .HasColumnType("decimal(10,4)");

                    b.Property<int>("CardExpMonth");

                    b.Property<int>("CardExpYear");

                    b.Property<string>("CardHolderName")
                        .HasMaxLength(150);

                    b.Property<string>("CardNumber")
                        .HasMaxLength(150);

                    b.Property<string>("Note")
                        .HasMaxLength(500);

                    b.Property<int>("OrderId");

                    b.Property<DateTime>("PaymentDate");

                    b.Property<int>("PaymentMethodId");

                    b.HasKey("PaymentId");

                    b.HasIndex("OrderId")
                        .IsUnique();

                    b.HasIndex("PaymentMethodId")
                        .IsUnique();

                    b.ToTable("Payment");
                });

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoPaymentMethod", b =>
                {
                    b.Property<int>("PaymentMethodId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(150);

                    b.HasKey("PaymentMethodId");

                    b.ToTable("PaymentMethod");
                });

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoProduct", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryId");

                    b.Property<string>("Image");

                    b.Property<string>("Ingredient");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(1000);

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(10,4)");

                    b.Property<string>("Size")
                        .HasMaxLength(100);

                    b.HasKey("ProductId");

                    b.HasIndex("CategoryId")
                        .IsUnique();

                    b.ToTable("Product");
                });

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoIngredientCategory", b =>
                {
                    b.HasOne("FoodOrderApp.Service.DbContext.DtoCategory", "Category")
                        .WithMany("IngredientCategories")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("FoodOrderApp.Service.DbContext.DtoIngredient", "Ingredient")
                        .WithMany("IngredientCategories")
                        .HasForeignKey("IngredientId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoOrderItem", b =>
                {
                    b.HasOne("FoodOrderApp.Service.DbContext.DtoOrder", "Order")
                        .WithMany("OrderItems")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("FoodOrderApp.Service.DbContext.DtoProduct", "Product")
                        .WithOne("OrderItem")
                        .HasForeignKey("FoodOrderApp.Service.DbContext.DtoOrderItem", "ProductId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoOrderItemIngredient", b =>
                {
                    b.HasOne("FoodOrderApp.Service.DbContext.DtoIngredient", "Ingredient")
                        .WithMany("OrderItemIngredients")
                        .HasForeignKey("IngredientId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("FoodOrderApp.Service.DbContext.DtoOrderItem", "OrderItem")
                        .WithMany("OrderItemIngredients")
                        .HasForeignKey("OrderItemId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoPayment", b =>
                {
                    b.HasOne("FoodOrderApp.Service.DbContext.DtoOrder", "Order")
                        .WithOne("Payment")
                        .HasForeignKey("FoodOrderApp.Service.DbContext.DtoPayment", "OrderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("FoodOrderApp.Service.DbContext.DtoPaymentMethod", "PaymentMethod")
                        .WithOne("Payment")
                        .HasForeignKey("FoodOrderApp.Service.DbContext.DtoPayment", "PaymentMethodId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("FoodOrderApp.Service.DbContext.DtoProduct", b =>
                {
                    b.HasOne("FoodOrderApp.Service.DbContext.DtoCategory", "Category")
                        .WithOne("Product")
                        .HasForeignKey("FoodOrderApp.Service.DbContext.DtoProduct", "CategoryId")
                        .OnDelete(DeleteBehavior.Restrict);
                });
#pragma warning restore 612, 618
        }
    }
}
