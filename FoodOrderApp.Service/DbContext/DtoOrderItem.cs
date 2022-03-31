using System.Collections.Generic;

namespace FoodOrderApp.Service.DbContext
{
    public class DtoOrderItem
    {
        public int OrderItemId { get; set; }
        public int UserId { get; set; }
        public string Note { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }
        public decimal UnitPrice { get; set; }

        public int OrderId { get; set; }
        public int ProductId { get; set; }

        public DtoOrder Order { get; set; }
        public DtoProduct Product { get; set; }
        public List<DtoOrderItemIngredient> OrderItemIngredients { get; set; }
    }
}
