using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using FoodOrderApp.Service.Business.Abstractions;
using FoodOrderApp.Service.DbContext;

namespace FoodOrderApp.Service.Business
{
    public class ProductRepository : IProductRepository
    {
        protected readonly FoodOrderDbContext _dbContext;
        public ProductRepository(FoodOrderDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task CreateProduct(DtoProduct product)
        {
            _dbContext.Products.Add(product);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteProduct(DtoProduct product)
        {
            _dbContext.Products.Remove(product);
            await _dbContext.SaveChangesAsync();
        }

        public Task<DtoProduct> GetProduct(int productId)
        {
            return _dbContext.Products
                .Include(p => p.Category)
                .Where(p => p.ProductId == productId)
                .SingleAsync();
        }

        public Task<List<DtoProduct>> GetProductsByCategory(int categoryId)
        {
            var query =
                from
                    p in _dbContext.Products
                join
                    c in _dbContext.Categories on p.CategoryId equals c.CategoryId

                where p.CategoryId == categoryId

                select new DtoProduct
                {
                    ProductId = p.ProductId,
                    Name = p.Name,
                    Ingredient = p.Ingredient,
                    Price = p.Price,
                    Size = p.Size,
                    Image = p.Image,
                    CategoryId = p.CategoryId,
                    Category = c
                };

            return query.ToListAsync();
        }

        public async Task UpdateProduct(DtoProduct product)
        {
            _dbContext.Entry(product).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }


        public Task<List<DtoCategory>> GetCategories()
        {
            return _dbContext.Categories.ToListAsync();
        }

        public Task<DtoCategory> GetCategory(int categoryId)
        {
            return _dbContext.Categories
                    .Where(c => c.CategoryId == categoryId)
                    .SingleAsync();
        }


        public async Task<List<DtoIngredient>> GetIngredientsByCategory(int categoryId)
        {
            var query = await _dbContext.Categories
                    .Include(c => c.IngredientCategories)
                        .ThenInclude(i => i.Ingredient)
                    .Where(c => c.CategoryId == categoryId)
                    .SingleAsync();

            return query.IngredientCategories.Select(i => i.Ingredient).ToList();
        }
    }
}
