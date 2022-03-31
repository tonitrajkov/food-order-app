using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodOrderApp.Service.DbContext.Configration
{
    public class OrderItemIngredientConfiguration : IEntityTypeConfiguration<DtoOrderItemIngredient>
    {
        public void Configure(EntityTypeBuilder<DtoOrderItemIngredient> orderItemIngredientConfiguration)
        {
            orderItemIngredientConfiguration.ToTable("OrderItemIngredient");

            // property definitions
            orderItemIngredientConfiguration
                .HasKey(oii => new { oii.OrderItemId, oii.IngredientId });

            // relations
            orderItemIngredientConfiguration
                .HasOne(oii => oii.OrderItem)
                .WithMany(oi => oi.OrderItemIngredients)
                .HasForeignKey(oii => oii.OrderItemId);

            orderItemIngredientConfiguration
                .HasOne(oii => oii.Ingredient)
                .WithMany(i => i.OrderItemIngredients)
                .HasForeignKey(oii => oii.IngredientId);
        }
    }
}
