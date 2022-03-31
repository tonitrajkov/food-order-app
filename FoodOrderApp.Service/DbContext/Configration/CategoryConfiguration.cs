using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodOrderApp.Service.DbContext.Configration
{
    public class CategoryConfiguration : IEntityTypeConfiguration<DtoCategory>
    {
        public void Configure(EntityTypeBuilder<DtoCategory> categoryConfiguration)
        {
            categoryConfiguration.ToTable("Category");

            // property definitions
            categoryConfiguration.HasKey(c => c.CategoryId);

            categoryConfiguration.Property<string>("Name").IsRequired().HasMaxLength(200);
        }
    }
}
