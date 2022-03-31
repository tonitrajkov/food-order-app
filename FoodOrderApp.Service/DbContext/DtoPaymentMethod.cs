
namespace FoodOrderApp.Service.DbContext
{
    public class DtoPaymentMethod
    {
        public int PaymentMethodId { get; set; }
        public string Name { get; set; }

        public DtoPayment Payment { get; set; }
    }
}
