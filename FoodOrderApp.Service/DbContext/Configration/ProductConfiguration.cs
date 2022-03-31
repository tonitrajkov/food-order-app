using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodOrderApp.Service.DbContext.Configration
{
    public class ProductConfiguration : IEntityTypeConfiguration<DtoProduct>
    {
        public void Configure(EntityTypeBuilder<DtoProduct> productConfiguration)
        {
            productConfiguration.ToTable("Product");

            // property definitions
            productConfiguration.HasKey(p => p.ProductId);

            productConfiguration.Property<string>("Name").IsRequired().HasMaxLength(1000);
            productConfiguration.Property<decimal>("Price").IsRequired().HasColumnType("decimal(10,4)");
            productConfiguration.Property<string>("Size").HasMaxLength(100);

            var navigation = productConfiguration.Metadata.FindNavigation(nameof(DtoProduct.Category));
            navigation.SetPropertyAccessMode(PropertyAccessMode.FieldDuringConstruction);

            // relations
            productConfiguration
                .HasOne(p => p.Category)
                .WithOne(c => c.Product)
                .HasForeignKey<DtoProduct>(p => p.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
