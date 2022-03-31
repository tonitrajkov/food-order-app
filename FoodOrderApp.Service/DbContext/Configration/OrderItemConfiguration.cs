using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodOrderApp.Service.DbContext.Configration
{
    public class OrderItemConfiguration : IEntityTypeConfiguration<DtoOrderItem>
    {
        public void Configure(EntityTypeBuilder<DtoOrderItem> orderItemConfiguration)
        {
            orderItemConfiguration.ToTable("OrderItem");

            // property definitions
            orderItemConfiguration.HasKey(p => p.OrderItemId);

            orderItemConfiguration.Property<string>("Note").HasMaxLength(500);
            orderItemConfiguration.Property<int>("Quantity").IsRequired();
            orderItemConfiguration.Property<decimal>("TotalPrice").IsRequired().HasColumnType("decimal(10,4)");
            orderItemConfiguration.Property<decimal>("UnitPrice").IsRequired().HasColumnType("decimal(10,4)");
            orderItemConfiguration.Property<int>("UserId").IsRequired();

            // relations
            orderItemConfiguration
                .HasOne(oi => oi.Product)
                .WithOne(p => p.OrderItem)
                .HasForeignKey<DtoOrderItem>(p => p.ProductId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
