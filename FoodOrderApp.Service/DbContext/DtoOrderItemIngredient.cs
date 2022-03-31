
namespace FoodOrderApp.Service.DbContext
{
    public class DtoOrderItemIngredient
    {
        public int OrderItemId { get; set; }
        public int IngredientId { get; set; }

        public DtoOrderItem OrderItem { get; set; }
        public DtoIngredient Ingredient { get; set; }
    }
}
