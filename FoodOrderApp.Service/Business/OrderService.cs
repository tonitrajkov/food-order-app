using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using FoodOrderApp.Service.Business.Abstractions;
using FoodOrderApp.Service.DbContext;
using FoodOrderApp.Service.Details.Enums;
using FoodOrderApp.Service.Details.Models;
using FoodOrderApp.Service.Mappers;

namespace FoodOrderApp.Service.Business
{
    public class OrderService : IOrderService
    {
        #region Declaration & Ctor

        private readonly IOrderRepository _orderRepository;

        public OrderService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        #endregion

        public async Task<Order> GetOrderById(int userId, int orderId)
        {
            var dtoOrder = await _orderRepository.GetOrderById(userId, orderId);
            if (dtoOrder == null)
            {
                throw new Exception("Order not found");
            }

            var model = dtoOrder.ToModel();
            model.OrderItems = (await _orderRepository.GetOrderItemsByOrderId(dtoOrder.OrderId)).ToListModel();

            return await Task.FromResult(model);
        }

        public async Task<Order> CreateOrderItem(int userId, int? orderId, OrderItem orderItem)
        {
            DtoOrder dtoOrder = new DtoOrder();
            var dtoOrderItem = orderItem.ToDto();
            dtoOrderItem.UserId = userId;

            if (!orderId.HasValue)
            {
                dtoOrder = new DtoOrder
                {
                    UserId = userId,
                    OrderStatus = (int)OrderStatus.Submitted,
                    TotalPrice = dtoOrderItem.TotalPrice,
                    OrderItems = new List<DtoOrderItem> { dtoOrderItem }
                };

                await _orderRepository.CreateOrder(dtoOrder);
            }
            else
            {
                dtoOrder = await _orderRepository.GetOrderById(userId, orderId.Value);
                if (dtoOrder == null)
                {
                    throw new Exception("Order not found");
                }

                dtoOrder.TotalPrice = dtoOrder.TotalPrice + dtoOrderItem.TotalPrice;
                dtoOrder.OrderItems.Add(dtoOrderItem);

                await _orderRepository.UpdateOrder(dtoOrder);
            }

            var model = dtoOrder.ToModel();
            model.OrderItems = (await _orderRepository.GetOrderItemsByOrderId(dtoOrder.OrderId)).ToListModel();

            return await Task.FromResult(model);
        }

        public async Task DeleteOrderItem(int userId, int orderItemId, int orderId)
        {
            var orderItem = await _orderRepository.GetOrderItemByIdAndOrderId(userId, orderItemId, orderId);
            if (orderItem == null)
            {
                throw new Exception("Order item not found");
            }

            await _orderRepository.DeleteOrderItem(orderItem);
        }
    }
}
