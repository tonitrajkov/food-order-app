using System.Collections.Generic;

namespace FoodOrderApp.Service.DbContext
{
    public class DtoIngredient
    {
        public int IngredientId { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        public ICollection<DtoIngredientCategory> IngredientCategories { get; set; }
        public ICollection<DtoOrderItemIngredient> OrderItemIngredients { get; set; }
    }
}
