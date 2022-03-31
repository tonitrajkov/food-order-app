using System.Collections.Generic;

namespace FoodOrderApp.Service.DbContext
{
    public class DtoCategory
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }

        public ICollection<DtoIngredientCategory> IngredientCategories { get; set; }
        public DtoProduct Product { get; set; }
    }
}
