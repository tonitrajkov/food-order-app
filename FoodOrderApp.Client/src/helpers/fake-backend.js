import axios from 'axios';
import { categories, products, ingredients, order } from './mock-data';

export function fakeBackend() {
    const methods = ['get', 'post', 'put', 'delete'];
    methods.forEach(method => {
        axios[`original${method}`] = axios[method];
        axios[method] = function (url, ...params) {
            return new Promise((resolve, reject) => {
                return handleRoute();

                function handleRoute() {
                    switch (true) {
                        case url.endsWith('/api/auth'):
                            return ok(new Date().getTime());
                        case url.includes('/food/categories'):
                            return ok(categories);
                        case url.includes('/food/products/'):
                            return getProductsByCategory();
                        case url.includes('/food/ingredients'):
                            return ok(categories);
                        case url.includes('/food/product/'):
                            return getProductById();
                        case url.includes('/food/product-details/'):
                            return getProductDetailsById();
                        case url.includes('/food/ingredients/'):
                            return getIngredientsByCategory();
                        case url.includes('/food/order/'):
                            return getOrder();
                        case url.includes('/food/order/item-create'):
                            return createOrderItem();
                        case url.includes('/food/order/item-delete'):
                            return deleteOrderItem();
                        default:
                            // pass through any requests not handled above
                            return axios[`original${method}`](url, body())
                                .then(response => resolve(response))
                                .catch(error => reject(error));
                    }
                }

                function getProductsByCategory() {
                    const categoryId = idFromUrl();
                    const catProducts = products.filter(x => x.category.categoryId === categoryId);
                    return ok(catProducts);
                }

                function getProductById() {
                    const productId = idFromUrl();
                    const product = products.find(x => x.productId === productId);
                    if (product) {
                        return ok(product);
                    }
                    return notFound();
                }

                function getProductDetailsById() {
                    const productId = idFromUrl();
                    const product = products.find(x => x.productId === productId);
                    if (product) {
                        const productIngredients = ingredients.filter(i => i.category.categoryId === product.category.categoryId);

                        return ok({
                            product,
                            ingredients: productIngredients
                        });
                    }
                    return notFound();
                }

                function getIngredientsByCategory() {
                    const categoryId = idFromUrl();
                    const catIngredients = ingredients.filter(i => i.category.categoryId === categoryId);
                    return ok(catIngredients);
                }

                function getOrder() {
                    return ok(order);
                }

                function createOrderItem() {
                    let params = body();
                    const orderId = idFromUrl();
                    if (orderId) {
                        let order = localStorage.getItem(`food-order-${3}`);
                    }
                    else {

                    }
                }

                function deleteOrderItem() {

                }

                // helpers
                function ok(body) {
                    setTimeout(() => resolve({ status: 200, data: body }), 100);
                }

                function notFound() {
                    setTimeout(() => {
                        const response = { status: 404, data: { message: 'Not found' } };
                        reject(response);
                    }, 100);
                }

                function unauthorized() {
                    setTimeout(() => {
                        const response = { status: 401, data: { message: 'Unauthorized' } };
                        reject(response);

                        // manually trigger error interceptor
                        const errorInterceptor = axios.interceptors.response.handlers[0].rejected;
                        errorInterceptor({ response });
                    }, 100);
                }

                function idFromUrl() {
                    const urlParts = url.split('/');
                    return parseInt(urlParts[urlParts.length - 1]);
                }

                function body() {
                    if (['post', 'put'].includes(method))
                        return params[0];
                }
            });
        }
    });
}