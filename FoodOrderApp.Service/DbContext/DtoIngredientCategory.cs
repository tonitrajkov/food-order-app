
namespace FoodOrderApp.Service.DbContext
{
    public class DtoIngredientCategory
    {
        public int CategoryId { get; set; }
        public int IngredientId { get; set; }

        public DtoCategory Category { get; set; }
        public DtoIngredient Ingredient { get; set; }
    }
}
