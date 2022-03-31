using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using FoodOrderApp.Service.Business.Abstractions;
using FoodOrderApp.Service.Details.Models;
using FoodOrderApp.Nats.Service;

namespace FoodOrderApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        #region Declaration & Ctor

        private readonly IProductService _productService;
        private readonly IOrderService _orderService;
        private readonly IPubSubService _pubSubService;

        public FoodController(IProductService productService, IOrderService orderService, IPubSubService pubSubService)
        {
            _productService = productService;
            _orderService = orderService;
            _pubSubService = pubSubService;
        }

        #endregion

        [Route("products/{categoryId}")]
        [HttpGet]
        public async Task<IActionResult> GetProductsByCategory(int categoryId)
        {
            var products = await _productService.GetProductsByCategory(categoryId);
            return Ok(products);
        }

        [Route("product/{productId}")]
        [HttpGet]
        public async Task<IActionResult> GetProduct(int productId)
        {
            var product = await _productService.GetProduct(productId);
            return Ok(product);
        }

        [Route("product-details/{productId}")]
        [HttpGet]
        public async Task<IActionResult> GetProductDetails(int productId)
        {
            var productDetails = await _productService.GetProductDetails(productId);
            return Ok(productDetails);
        }

        [Route("categories")]
        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _productService.GetCategories();

            _pubSubService.Publish("Test fucking message");

            return Ok(categories);
        }

        [Route("ingredients/{categoryId}")]
        [HttpGet]
        public async Task<IActionResult> GetIngredientsByCategory(int categoryId)
        {
            var ingredients = await _productService.GetIngredientsByCategory(categoryId);
            return Ok(ingredients);
        }


        [Route("order/{userId}/{orderId}")]
        [HttpGet]
        public async Task<IActionResult> GetOrder(int userId, int orderId)
        {
            var order = await _orderService.GetOrderById(userId, orderId);
            return Ok(order);
        }

        [Route("order/item-create/{userId}/{orderId?}")]
        [HttpPost]
        public async Task<IActionResult> CreateOrderItem([FromBody] OrderItem orderItem, int userId, int? orderId = null)
        {
            try
            {
                var order = await _orderService.CreateOrderItem(userId, orderId, orderItem);
                return Ok(order);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        [Route("order/item-delete/{userId}/{orderItemId}/{orderId}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteOrderItem(int userId, int orderItemId, int orderId)
        {
            try
            {
                await _orderService.DeleteOrderItem(userId, orderItemId, orderId);
                return Ok();
            }
            catch (Exception ex)
            {

                throw ex; 
            }
        }
    }
}