using System.Collections.Generic;

using FoodOrderApp.Service.DbContext;
using FoodOrderApp.Service.Details.Models;

namespace FoodOrderApp.Service.Mappers
{
    public static class ProductMapper
    {
        public static Product ToModel(this DtoProduct dto)
        {
            return new Product
            {
                ProductId = dto.ProductId,
                Name = dto.Name,
                Ingredient = dto.Ingredient,
                Price = dto.Price,
                Size = dto.Size,
                Image = dto.Image,
                Category = dto.Category != null ? dto.Category.ToModel() : null
            };
        }

        public static Category ToModel(this DtoCategory dto)
        {
            return new Category
            {
                CategoryId = dto.CategoryId,
                Name = dto.Name
            };
        }

        public static Ingredient ToModel(this DtoIngredient dto)
        {
            return new Ingredient
            {
                IngredientId = dto.IngredientId,
                Name = dto.Name,
                Price = dto.Price
            };
        }

        public static List<Product> ToListModel(this IEnumerable<DtoProduct> products)
        {
            var result = new List<Product>();
            if (products == null)
                return result;

            foreach (var item in products)
            {
                result.Add(item.ToModel());
            }
            return result;
        }

        public static List<Category> ToListModel(this List<DtoCategory> categories)
        {
            var result = new List<Category>();
            if (categories == null)
                return result;

            categories.ForEach(x => result.Add(x.ToModel()));
            return result;
        }

        public static List<Ingredient> ToListModel(this List<DtoIngredient> ingredients)
        {
            var result = new List<Ingredient>();
            if (ingredients == null)
                return result;

            ingredients.ForEach(x => result.Add(x.ToModel()));
            return result;
        }


        public static DtoCategory ToDto(this Category model)
        {
            return new DtoCategory
            {
                CategoryId = model.CategoryId,
                Name = model.Name
            };
        }

        public static DtoIngredient ToDto(this Ingredient model)
        {
            return new DtoIngredient
            {
                IngredientId = model.IngredientId,
                Name = model.Name,
                Price = model.Price
            };
        }
    }
}
