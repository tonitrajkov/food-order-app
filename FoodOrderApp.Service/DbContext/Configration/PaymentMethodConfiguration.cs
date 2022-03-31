using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodOrderApp.Service.DbContext.Configration
{
    public class PaymentMethodConfiguration : IEntityTypeConfiguration<DtoPaymentMethod>
    {
        public void Configure(EntityTypeBuilder<DtoPaymentMethod> paymentMethodConfiguration)
        {
            paymentMethodConfiguration.ToTable("PaymentMethod");

            // property definitions
            paymentMethodConfiguration.HasKey(pm => pm.PaymentMethodId);

            paymentMethodConfiguration.Property<string>("Name").IsRequired().HasMaxLength(150);
        }
    }
}
