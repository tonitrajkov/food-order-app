using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodOrderApp.Service.DbContext.Configration
{
    public class IngredientConfiguration : IEntityTypeConfiguration<DtoIngredient>
    {
        public void Configure(EntityTypeBuilder<DtoIngredient> ingredientConfiguration)
        {
            ingredientConfiguration.ToTable("Ingredient");

            // property definitions
            ingredientConfiguration.HasKey(c => c.IngredientId);

            ingredientConfiguration.Property<string>("Name").IsRequired().HasMaxLength(150);
            ingredientConfiguration.Property<decimal>("Price").IsRequired().HasColumnType("decimal(10,4)");
        }
    }
}
