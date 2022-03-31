using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodOrderApp.Service.DbContext.Configration
{
    public class IngredientCategoryConfiguration : IEntityTypeConfiguration<DtoIngredientCategory>
    {
        public void Configure(EntityTypeBuilder<DtoIngredientCategory> ingredientCategoryConfiguration)
        {
            ingredientCategoryConfiguration.ToTable("IngredientCategory");

            // property definitions
            ingredientCategoryConfiguration
                  .HasKey(ic => new { ic.CategoryId, ic.IngredientId });

            // relations
            ingredientCategoryConfiguration
                .HasOne(ic => ic.Category)
                .WithMany(c => c.IngredientCategories)
                .HasForeignKey(ic => ic.CategoryId);

            ingredientCategoryConfiguration
                 .HasOne(ic => ic.Ingredient)
                 .WithMany(i => i.IngredientCategories)
                 .HasForeignKey(ic => ic.IngredientId);
        }
    }
}
