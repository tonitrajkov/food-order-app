using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodOrderApp.Service.DbContext.Configration
{
    public class OrderConfiguration : IEntityTypeConfiguration<DtoOrder>
    {
        public void Configure(EntityTypeBuilder<DtoOrder> orderConfiguration)
        {
            orderConfiguration.ToTable("Order");

            // property definitions
            orderConfiguration.HasKey(p => p.OrderId);

            orderConfiguration.Property<string>("OrderNumber").IsRequired().HasMaxLength(20);
            orderConfiguration.Property<DateTime>("OrderDate").IsRequired();
            orderConfiguration.Property<int>("OrderStatus").IsRequired();
            orderConfiguration.Property<string>("Note").HasMaxLength(500);
            orderConfiguration.Property<decimal>("TotalPrice").IsRequired().HasColumnType("decimal(10,4)");
            orderConfiguration.Property<int>("UserId").IsRequired();

            // relations
            orderConfiguration
                .HasMany(o => o.OrderItems)
                .WithOne(oi => oi.Order)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
