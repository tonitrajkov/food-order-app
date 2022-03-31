using System.Collections.Generic;
using System.Threading.Tasks;

using FoodOrderApp.Service.DbContext;

namespace FoodOrderApp.Service.Business.Abstractions
{
    public interface IOrderRepository
    {
        Task CreateOrder(DtoOrder order);
        Task UpdateOrder(DtoOrder order);
        Task<DtoOrder> GetOrderById(int userId, int orderId);

        Task CreateOrderItem(DtoOrderItem orderItem);
        Task UpdateOrderItem(DtoOrderItem orderItem);
        Task DeleteOrderItem(DtoOrderItem orderItem);
        Task<List<DtoOrderItem>> GetOrderItemsByOrderId(int orderId);
        Task<DtoOrderItem> GetOrderItemByIdAndOrderId(int userId, int orderItemId, int orderId);

        Task CreatePayment(DtoPayment payment);
        Task UpdatePayment(DtoPayment payment);
        Task<DtoPayment> GetPaymentById(int paymentId);
    }
}
