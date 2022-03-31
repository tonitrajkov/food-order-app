using System;

namespace FoodOrderApp.Service.DbContext
{
    public class DtoPayment
    {
        public int PaymentId { get; set; }
        public int UserId { get; set; }
        public DateTime PaymentDate { get; set; }
        public string Note { get; set; }
        public decimal Amount { get; set; }
        public string CardHolderName { get; set; }
        public string CardNumber { get; set; }
        public int CardExpMonth { get; set; }
        public int CardExpYear { get; set; }

        public int OrderId { get; set; }
        public int PaymentMethodId { get; set; }

        public virtual DtoOrder Order { get; set; }
        public DtoPaymentMethod PaymentMethod { get; set; }
    }
}
