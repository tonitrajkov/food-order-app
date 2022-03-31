using System;
using System.Collections.Generic;

namespace FoodOrderApp.Service.DbContext
{
    public class DtoOrder
    {
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public string OrderNumber { get; set; }
        public DateTime OrderDate { get; set; }
        public int OrderStatus { get; set; }
        public string Note { get; set; }
        public decimal TotalPrice { get; set; }

        public DtoPayment Payment { get; set; }
        public List<DtoOrderItem> OrderItems { get; set; }
    }
}
