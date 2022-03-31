
using System.Collections.Generic;

namespace FoodOrderApp.Service.Details.Models
{
    public class OrderItem
    {
        public int OrderItemId { get; set; }
        public string Note { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }
        public Product Product { get; set; }
        public List<Ingredient> Ingredients { get; set; }
    }
}
