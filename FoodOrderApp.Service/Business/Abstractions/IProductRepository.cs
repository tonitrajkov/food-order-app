using System.Collections.Generic;
using System.Threading.Tasks;

using FoodOrderApp.Service.DbContext;

namespace FoodOrderApp.Service.Business.Abstractions
{
    public interface IProductRepository
    {
        Task CreateProduct(DtoProduct product);
        Task UpdateProduct(DtoProduct product);
        Task DeleteProduct(DtoProduct product);
        Task<DtoProduct> GetProduct(int productId);
        Task<List<DtoProduct>> GetProductsByCategory(int categoryId);

        Task<List<DtoCategory>> GetCategories();
        Task<DtoCategory> GetCategory(int categoryId);

        Task<List<DtoIngredient>> GetIngredientsByCategory(int categoryId);
    }
}
