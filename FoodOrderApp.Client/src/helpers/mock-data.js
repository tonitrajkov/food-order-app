export const categories = [
    { categoryId: 1, name: 'Pizza' },
    { categoryId: 2, name: 'Pasta' },
    { categoryId: 3, name: 'Sandwiches' },
    { categoryId: 4, name: 'Salads' },
    { categoryId: 5, name: 'Deserts' }
];

export const products = [
    { productId: 1, name: 'Vegeteriana', ingredient: 'tomato sauce, yellow cheese, mushrooms, oregano', price: 3, size: 'M', image: '', category: { categoryId: 1, name: 'Pizza' } },
    { productId: 2, name: 'Napoletana', ingredient: 'tomato sauce, yellow cheese, ham, oregano', price: 3, size: 'M', image: '', category: { categoryId: 1, name: 'Pizza' } },
    { productId: 3, name: 'Margarita', ingredient: 'tomato sauce, yellow cheese, oregano, olives', price: 2.5, size: 'M', image: '', category: { categoryId: 1, name: 'Pizza' } },
    { productId: 4, name: 'Capricciosa', ingredient: 'tomato sauce, yellow cheese, mushrooms, ham, oregano', price: 3.3, size: 'M', image: '', category: { categoryId: 1, name: 'Pizza' } },
    { productId: 5, name: 'Vezuvio', ingredient: 'tomato sauce, yellow cheese, ham, mushroom, egg, oregano', price: 3.5, size: 'M', image: '', category: { categoryId: 1, name: 'Pizza' } },
    { productId: 6, name: 'Stelato', ingredient: 'tomato sauce, yellow cheese, ham, mushroom, sour cream, oregano', price: 3.5, size: 'M', image: '', category: { categoryId: 1, name: 'Pizza' } },
    { productId: 7, name: 'Quattro Stagioni', ingredient: 'tomato sauce, yellow cheese, ham, bacon, sausage, oregano, sour cream, mushroom, hot peppers, olives', price: 3.6, size: 'M', image: '', category: { categoryId: 1, name: 'Pizza' } },
    { productId: 8, name: 'Sea World', ingredient: 'tomato sauce, yellow cheese, tuna, mussels, shrimps, octopus, olives, garlic, oregano', price: 4.2, size: 'M', image: '', category: { categoryId: 1, name: 'Pizza' } },
    { productId: 9, name: 'Quattro Formaggi', ingredient: 'cream, gorgonzola, yellow cheese, parmesan', price: 3.4, size: 'M', image: '', category: { categoryId: 2, name: 'Pasta' } },
    { productId: 10, name: 'Sea World', ingredient: 'sour cream, shrimps, mussels, tuna, octopus, parsley, spices, white wine', price: 4.2, size: 'M', image: '', category: { categoryId: 2, name: 'Pasta' } },
    { productId: 11, name: 'Lime Chicken', ingredient: 'cream, chicken, mushrooms, curry, parmesan', price: 3.4, size: 'M', image: '', category: { categoryId: 2, name: 'Pasta' } },
    { productId: 12, name: 'Curry Chicken', ingredient: 'cream, chicken, mushrooms curry, parmesan', price: 3.4, size: 'M', image: '', category: { categoryId: 2, name: 'Pasta' } },
    { productId: 13, name: 'Prosciutto', ingredient: 'cream, butter, prosciutto, пarmesan, spices', price: 3.4, size: 'M', image: '', category: { categoryId: 2, name: 'Pasta' } },
    { productId: 14, name: 'Spict Shrimps', ingredient: 'shrimps, broth, shrimps, hot peppers, onion, cherry tomato, dry tomato', price: 4.2, size: 'M', image: '', category: { categoryId: 2, name: 'Pasta' } },
    { productId: 15, name: 'Arrabiata', ingredient: 'chilli, garlic, tomatoes, basil, olive oil', price: 3.2, size: 'M', image: '', category: { categoryId: 2, name: 'Pasta' } },
    { productId: 16, name: 'Home Made', ingredient: 'hand made bread with sesame, yellow cheese, ham, mushrooms, mayonnaise tomato, pickles, oregano', price: 2.1, size: 'M', image: '', category: { categoryId: 3, name: 'Sandwiches' } },
    { productId: 17, name: 'Tuna', ingredient: 'hand made bread with sesame, yellow cheese, tuna, tomato, onion lettuce, mayonnaise', price: 2.1, size: 'M', image: '', category: { categoryId: 3, name: 'Sandwiches' } },
    { productId: 18, name: 'Beef-Pork Prosciutto', ingredient: 'hand made bread with sesame, yellow cheese, lettuce, tomato, beef-pork prosciutto, mayonnaise', price: 2.2, size: 'M', image: '', category: { categoryId: 3, name: 'Sandwiches' } },
    { productId: 19, name: 'Rocket', ingredient: 'hand made bread with sesame, tomato, mozzarella, rocket, prosciutto, basil, olives', price: 2, size: 'M', image: '', category: { categoryId: 3, name: 'Sandwiches' } },
    { productId: 20, name: 'Vegeterian', ingredient: 'hand made bread with sesame, lettuce, tomato, mozzarella, gorgonzola, mushrooms, mayonnaise', price: 2.2, size: 'M', image: '', category: { categoryId: 3, name: 'Sandwiches' } },
    { productId: 21, name: 'Geeek', ingredient: 'tomato, cucumber, onion, white cheese, olive, oregano', price: 2, size: 'M', image: '', category: { categoryId: 4, name: 'Salads' } },
    { productId: 22, name: 'Mixed', ingredient: 'cabbage, lettuce, ice berg, cucumber, carrot, baby corn, reddish, olive, beet', price: 1.8, size: 'M', image: '', category: { categoryId: 4, name: 'Salads' } },
    { productId: 23, name: 'Tuna', ingredient: 'lettuce, ice berg, cucumber, lemon, onion, tuna, reddish, olive', price: 2.4, size: 'M', image: '', category: { categoryId: 4, name: 'Salads' } },
    { productId: 24, name: 'Rocket', ingredient: 'rocket, parmesan', price: 2, size: 'M', image: '', category: { categoryId: 4, name: 'Salads' } },
    { productId: 25, name: 'Caprese', ingredient: 'tomatoes, basil, mozzarella, olive oil', price: 2.2, size: 'M', image: '', category: { categoryId: 4, name: 'Salads' } },
    { productId: 26, name: 'Tzatziki', ingredient: 'garlic, milk yogurt, olive oil, pepper, walnuts', price: 1.6, size: 'M', image: '', category: { categoryId: 4, name: 'Salads' } },
    { productId: 27, name: 'Cessar', ingredient: 'lettuce, ice berg, chicken breast, croutons, parmesan, egg', price: 2.8, size: 'M', image: '', category: { categoryId: 4, name: 'Salads' } },
    { productId: 28, name: 'Sea Salad', ingredient: 'octopus, mussels, shrimps, tuna', price: 4.7, size: 'M', image: '', category: { categoryId: 4, name: 'Salads' } },
    { productId: 29, name: 'Tiramisu', ingredient: '', price: 1.6, size: 'M', image: '', category: { categoryId: 5, name: 'Deserts' } }, ,
    { productId: 30, name: 'Lava Cake', ingredient: '', price: 1.8, size: 'M', image: '', category: { categoryId: 5, name: 'Deserts' } }, ,
    { productId: 31, name: 'Panna Cota Cream', ingredient: '', price: 1.5, size: 'M', image: '', category: { categoryId: 5, name: 'Deserts' } }, ,
    { productId: 32, name: 'Ice Cream', ingredient: '', price: 1.5, size: 'M', image: '', category: { categoryId: 5, name: 'Deserts' } }, ,
    { productId: 33, name: 'Fruit Salad', ingredient: '', price: 1.8, size: 'M', image: '', category: { categoryId: 5, name: 'Deserts' } }, ,
];

export const ingredients = [
    { ingredientId: 1, name: 'yellow cheese', price: 0.2, isSelected: false, category: { categoryId: 1, name: 'Pizza' } },
    { ingredientId: 2, name: 'ham', price: 0.5, isSelected: false, category: { categoryId: 1, name: 'Pizza' } },
    { ingredientId: 3, name: 'mushrooms', price: 0.4, isSelected: false, category: { categoryId: 1, name: 'Pizza' } },
    { ingredientId: 4, name: 'olives', price: 0.3, isSelected: false, category: { categoryId: 1, name: 'Pizza' } },
    { ingredientId: 5, name: 'parmesan', price: 0.6, isSelected: false, category: { categoryId: 1, name: 'Pizza' } },
    { ingredientId: 6, name: 'egg', price: 0.3, isSelected: false, category: { categoryId: 1, name: 'Pizza' } },
    { ingredientId: 7, name: 'hot peppers', price: 0.1, isSelected: false, category: { categoryId: 1, name: 'Pizza' } },
    { ingredientId: 8, name: 'hot peppers', price: 0.1, isSelected: false, category: { categoryId: 2, name: 'Pasta' } },
    { ingredientId: 9, name: 'egg', price: 0.3, isSelected: false, category: { categoryId: 2, name: 'Pasta' } },
    { ingredientId: 10, name: 'parmesan', price: 0.6, isSelected: false, category: { categoryId: 2, name: 'Pasta' } },
    { ingredientId: 11, name: 'mushrooms', price: 0.4, isSelected: false, category: { categoryId: 2, name: 'Pasta' } },
    { ingredientId: 12, name: 'tomatoes', price: 0.3, isSelected: false, category: { categoryId: 2, name: 'Pasta' } },
    { ingredientId: 13, name: 'onion', price: 0.1, isSelected: false, category: { categoryId: 2, name: 'Pasta' } },
    { ingredientId: 14, name: 'basil', price: 0.2, isSelected: false, category: { categoryId: 2, name: 'Pasta' } },
    { ingredientId: 15, name: 'egg', price: 0.3, isSelected: false, category: { categoryId: 3, name: 'Sandwiches' } },
    { ingredientId: 16, name: 'mushrooms', price: 0.4, isSelected: false, category: { categoryId: 3, name: 'Sandwiches' } },
    { ingredientId: 17, name: 'mayonnaise', price: 0.1, isSelected: false, category: { categoryId: 3, name: 'Sandwiches' } },
    { ingredientId: 18, name: 'tomato', price: 0.1, isSelected: false, category: { categoryId: 3, name: 'Sandwiches' } },
    { ingredientId: 19, name: 'mozzarella', price: 0.5, isSelected: false, category: { categoryId: 3, name: 'Sandwiches' } },
    { ingredientId: 20, name: 'ham', price: 0.5, isSelected: false, category: { categoryId: 3, name: 'Sandwiches' } },
    { ingredientId: 21, name: 'parmesan', price: 0.6, isSelected: false, category: { categoryId: 4, name: 'Salads' } },
    { ingredientId: 22, name: 'lemon', price: 0.3, isSelected: false, category: { categoryId: 4, name: 'Salads' } },
    { ingredientId: 23, name: 'onion', price: 0.1, isSelected: false, category: { categoryId: 4, name: 'Salads' } },
    { ingredientId: 24, name: 'onion', price: 0.1, isSelected: false, category: { categoryId: 4, name: 'Salads' } },
    { ingredientId: 25, name: 'honey', price: 45, isSelected: false, category: { categoryId: 5, name: 'Deserts' } },
    { ingredientId: 26, name: 'jam', price: 0.5, isSelected: false, category: { categoryId: 5, name: 'Deserts' } },
    { ingredientId: 27, name: 'banana', price: 0.3, isSelected: false, category: { categoryId: 5, name: 'Deserts' } },
    { ingredientId: 28, name: 'walnuts', price: 0.7, isSelected: false, category: { categoryId: 5, name: 'Deserts' } },
    { ingredientId: 29, name: 'chocolate', price: 0.65, isSelected: false, category: { categoryId: 5, name: 'Deserts' } },
    { ingredientId: 30, name: 'ice cream', price: 0.4, isSelected: false, category: { categoryId: 5, name: 'Deserts' } },
];

export const order = null;
 {
    // orderId: 1, orderNumber: '', orderDate: new Date(), orderStatus: '', note: '', totalPrice: 0,
    // orderItems: [
    //     { orderItemId: 1, note: '', quantity: 1, totalPrice: 0, product: {}, ingredients: [] }
    // ]
}