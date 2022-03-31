
namespace FoodOrderApp.Service.Details.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Ingredient { get; set; }
        public decimal Price { get; set; }
        public string Size { get; set; }
        public string Image { get; set; }
        public Category Category { get; set; }
    }
}
