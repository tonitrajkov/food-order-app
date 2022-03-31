using Microsoft.EntityFrameworkCore;

using FoodOrderApp.Service.DbContext.Configration;

namespace FoodOrderApp.Service.DbContext
{
    public class FoodOrderDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public FoodOrderDbContext(DbContextOptions<FoodOrderDbContext> options)
          : base(options) { }

        public DbSet<DtoCategory> Categories { get; set; }
        public DbSet<DtoIngredient> Ingredients { get; set; }
        public DbSet<DtoOrder> Orders { get; set; }
        public DbSet<DtoOrderItem> OrderItems { get; set; }
        public DbSet<DtoPayment> Payments { get; set; }
        public DbSet<DtoPaymentMethod> PaymentMethods { get; set; }
        public DbSet<DtoProduct> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            modelBuilder.ApplyConfiguration(new IngredientCategoryConfiguration());
            modelBuilder.ApplyConfiguration(new IngredientConfiguration());
            modelBuilder.ApplyConfiguration(new OrderConfiguration());
            modelBuilder.ApplyConfiguration(new OrderItemConfiguration());
            modelBuilder.ApplyConfiguration(new OrderItemIngredientConfiguration());
            modelBuilder.ApplyConfiguration(new PaymentConfiguration());
            modelBuilder.ApplyConfiguration(new PaymentMethodConfiguration());
            modelBuilder.ApplyConfiguration(new ProductConfiguration());   
        }
    }
}
