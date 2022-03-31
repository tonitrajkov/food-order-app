using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using FoodOrderApp.Service.Business.Abstractions;
using FoodOrderApp.Service.DbContext;

namespace FoodOrderApp.Service.Business
{
    public class OrderRepository : IOrderRepository
    {
        protected readonly FoodOrderDbContext _dbContext;
        public OrderRepository(FoodOrderDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task CreateOrder(DtoOrder order)
        {
            order.OrderDate = DateTime.Now;
            order.OrderNumber = DateTime.Now.Ticks.ToString();

            _dbContext.Orders.Add(order);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateOrder(DtoOrder order)
        {
            _dbContext.Entry(order).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public Task<DtoOrder> GetOrderById(int userId, int orderId)
        {
            return _dbContext.Orders
                 .Include(o => o.OrderItems)
                 .SingleAsync(o => o.UserId == userId && 
                    o.OrderId == orderId);
        }


        public async Task CreateOrderItem(DtoOrderItem orderItem)
        {
            _dbContext.OrderItems.Add(orderItem);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateOrderItem(DtoOrderItem orderItem)
        {
            _dbContext.Entry(orderItem).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteOrderItem(DtoOrderItem orderItem)
        {
            _dbContext.OrderItems.Remove(orderItem);
            await _dbContext.SaveChangesAsync();
        }

        public Task<List<DtoOrderItem>> GetOrderItemsByOrderId(int orderId)
        {
            var orderItems = _dbContext.OrderItems
                    .Include(oi => oi.OrderItemIngredients)
                        .ThenInclude(i => i.Ingredient)
                    .Where(oi => oi.OrderId == orderId);

            var query =
                from
                    oi in orderItems
                join
                    p in _dbContext.Products on oi.ProductId equals p.ProductId

                select new DtoOrderItem
                {
                    OrderItemId = oi.OrderItemId,
                    OrderId = oi.OrderId,
                    Note = oi.Note,
                    TotalPrice = oi.TotalPrice,
                    Quantity = oi.Quantity,
                    UnitPrice = oi.UnitPrice,
                    OrderItemIngredients = oi.OrderItemIngredients,
                    ProductId = oi.ProductId,
                    Product = p
                };

            return query.ToListAsync();
        }

        public Task<DtoOrderItem> GetOrderItemByIdAndOrderId(int userId, int orderItemId, int orderId)
        {
            return _dbContext.OrderItems
                    .Include(o => o.Order)
                    .SingleAsync(oi => oi.UserId == userId &&
                        oi.Order.OrderId == orderId &&
                            oi.OrderItemId == orderItemId);
        }


        public Task CreatePayment(DtoPayment payment)
        {
            throw new NotImplementedException();
        }

        public async Task UpdatePayment(DtoPayment payment)
        {
            _dbContext.Entry(payment).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public Task<DtoPayment> GetPaymentById(int paymentId)
        {
            return _dbContext.Payments
                    .Include(p => p.PaymentMethod)
                    .Include(p => p.Order)
                    .SingleAsync(p => p.PaymentId == paymentId);
        }

    }
}
