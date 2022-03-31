using System.Collections.Generic;
using System.Threading.Tasks;

using FoodOrderApp.Service.Details.Models;

namespace FoodOrderApp.Service.Business.Abstractions
{
    public interface IProductService
    {
        Task<List<Product>> GetProductsByCategory(int categoryId);
        Task<Product> GetProduct(int productId);
        Task CreateProduct(Product product);
        Task UpdateProduct(Product product);
        Task DeleteProduct(int productId);
        Task<ProductDetails> GetProductDetails(int productId);

        Task<List<Category>> GetCategories();

        Task<List<Ingredient>> GetIngredientsByCategory(int categoryId);
    }
}
