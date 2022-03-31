
namespace FoodOrderApp.Service.DbContext
{
    public class DtoProduct
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Ingredient { get; set; }
        public decimal Price { get; set; }
        public string Size { get; set; }
        public string Image { get; set; }

        public int CategoryId { get; set; }
        public DtoCategory Category { get; set; }
        public DtoOrderItem OrderItem { get; set; }
    }
}
