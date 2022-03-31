using System.Threading.Tasks;
using FoodOrderApp.Service.Details.Models;

namespace FoodOrderApp.Service.Business.Abstractions
{
    public interface IOrderService
    {
        Task<Order> GetOrderById(int userId, int orderId);
        Task<Order> CreateOrderItem(int userId, int? orderId, OrderItem orderItem);
        Task DeleteOrderItem(int userId, int orderItemId, int orderId);
    }
}
