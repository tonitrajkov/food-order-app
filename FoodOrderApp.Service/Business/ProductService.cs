using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

using FoodOrderApp.Service.Business.Abstractions;
using FoodOrderApp.Service.DbContext;
using FoodOrderApp.Service.Details.Models;
using FoodOrderApp.Service.Mappers;

namespace FoodOrderApp.Service.Business
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task CreateProduct(Product product)
        {
            var dto = new DtoProduct
            {
                Name = product.Name,
                Image = product.Image,
                Ingredient = product.Ingredient,
                Price = product.Price,
                Size = product.Size,
                CategoryId = product.Category.CategoryId
            };

            await _productRepository.CreateProduct(dto);
        }

        public async Task DeleteProduct(int productId)
        {
            var dto = await _productRepository.GetProduct(productId);
            if (dto == null)
            {
                throw new Exception("Product not found");
            }

            await _productRepository.DeleteProduct(dto);
        }

        public async Task<Product> GetProduct(int productId)
        {
            return (await _productRepository.GetProduct(productId)).ToModel();
        }

        public async Task<List<Product>> GetProductsByCategory(int categoryId)
        {
            return (await _productRepository.GetProductsByCategory(categoryId)).ToListModel();
        }

        public async Task UpdateProduct(Product product)
        {
            var dto = await _productRepository.GetProduct(product.ProductId);
            if (dto == null)
            {
                throw new Exception("Product not found");
            }

            dto.Name = product.Name;
            dto.Ingredient = product.Ingredient;
            dto.Image = product.Image;
            dto.Size = product.Size;
            dto.Price = product.Price;
            dto.CategoryId = product.Category.CategoryId;

            await _productRepository.UpdateProduct(dto);
        }

        public async Task<ProductDetails> GetProductDetails(int productId)
        {
            var product = await GetProduct(productId);
            if (product == null)
            {
                throw new Exception("NOT FOUND");
            }

            var ingredients = await GetIngredientsByCategory(product.Category.CategoryId);

            return new ProductDetails
            {
                Product = product,
                Ingredients = ingredients
            };
        }


        public async Task<List<Category>> GetCategories()
        {
            return (await _productRepository.GetCategories()).ToListModel();
        }


        public async Task<List<Ingredient>> GetIngredientsByCategory(int categoryId)
        {
            return (await _productRepository.GetIngredientsByCategory(categoryId)).ToListModel();
        }
    }
}
