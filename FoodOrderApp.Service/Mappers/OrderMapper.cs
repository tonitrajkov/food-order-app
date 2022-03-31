using System;
using System.Collections.Generic;
using System.Text;

using FoodOrderApp.Service.DbContext;
using FoodOrderApp.Service.Details.Models;
using FoodOrderApp.Service.Details.Enums;
using System.Linq;

namespace FoodOrderApp.Service.Mappers
{
    public static class OrderMapper
    {
        public static Order ToModel(this DtoOrder dto)
        {
            return new Order
            {
                OrderId = dto.OrderId,
                OrderNumber = dto.OrderNumber,
                OrderDate = dto.OrderDate,
                OrderStatus = (OrderStatus)dto.OrderStatus,
                Note = dto.Note,
                TotalPrice = dto.TotalPrice
            };
        }

        public static OrderItem ToModel(this DtoOrderItem dto)
        {
            return new OrderItem
            {
                OrderItemId = dto.OrderItemId,
                Note = dto.Note,
                Quantity = dto.Quantity,
                TotalPrice = dto.TotalPrice,
                Product = dto.Product.ToModel(),
                Ingredients = dto.OrderItemIngredients.ToListIngredientModel()
            };
        }

        public static List<Order> ToListModel(this List<DtoOrder> orders)
        {
            var result = new List<Order>();
            if (orders == null)
                return result;

            orders.ForEach(x => result.Add(x.ToModel()));
            return result;
        }

        public static List<OrderItem> ToListModel(this List<DtoOrderItem> orderItems)
        {
            var result = new List<OrderItem>();
            if (orderItems == null)
                return result;

            orderItems.ForEach(x => result.Add(x.ToModel()));
            return result;
        }

        public static List<Ingredient> ToListIngredientModel(this List<DtoOrderItemIngredient> orderItemIngredients)
        {
            var result = new List<Ingredient>();
            if (orderItemIngredients == null)
                return result;

            orderItemIngredients.ForEach(x => result.Add(x.Ingredient.ToModel()));
            return result;
        }


        public static DtoOrderItem ToDto(this OrderItem model)
        {
            var dto = new DtoOrderItem
            {
                Note = model.Note,
                Quantity = model.Quantity,
                TotalPrice = model.TotalPrice,
                ProductId = model.Product.ProductId
            };

            if (model.Ingredients.Any())
            {
                var itemIngredients = new List<DtoOrderItemIngredient>();
                foreach (var ingredient in model.Ingredients)
                {
                    itemIngredients.Add(new DtoOrderItemIngredient
                    {
                        OrderItem = dto,
                        Ingredient = ingredient.ToDto()
                    });
                }

                dto.OrderItemIngredients = itemIngredients;
            }

            return dto;
        }
    }
}
