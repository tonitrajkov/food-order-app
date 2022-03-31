using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace FoodOrderApp.Service.DbContext.Configration
{
    public class PaymentConfiguration: IEntityTypeConfiguration<DtoPayment>
    {
        public void Configure(EntityTypeBuilder<DtoPayment> paymentConfiguration)
        {
            paymentConfiguration.ToTable("Payment");

            // property definitions
            paymentConfiguration.HasKey(p => p.PaymentId);

            paymentConfiguration.Property<DateTime>("PaymentDate").IsRequired();
            paymentConfiguration.Property<string>("Note").HasMaxLength(500);
            paymentConfiguration.Property<decimal>("Amount").IsRequired().HasColumnType("decimal(10,4)");
            paymentConfiguration.Property<string>("CardHolderName").HasMaxLength(150);
            paymentConfiguration.Property<string>("CardNumber").HasMaxLength(150);
            paymentConfiguration.Property<int>("UserId").IsRequired();

            // relations
            paymentConfiguration
                .HasOne(p => p.PaymentMethod)
                .WithOne(pm => pm.Payment)
                .HasForeignKey<DtoPayment>(p => p.PaymentMethodId)
                .OnDelete(DeleteBehavior.Restrict);

            paymentConfiguration
                .HasOne(p => p.Order)
                .WithOne(o => o.Payment)
                .HasForeignKey<DtoPayment>(p => p.OrderId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
