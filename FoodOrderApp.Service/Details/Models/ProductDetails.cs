using System.Collections.Generic;

namespace FoodOrderApp.Service.Details.Models
{
    public class ProductDetails
    {
        public Product Product { get; set; }

        public List<Ingredient> Ingredients { get; set; }
    }
}
