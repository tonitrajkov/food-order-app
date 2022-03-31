import axios from "axios";

import * as types from '../constants/actionTypes';

const apiUrl = 'https://localhost:44380/api/';

// Sync Action
export const loadProductsSuccess = (products) => {
    return {
        type: types.LOAD_PRODUCTS,
        payload: products
    }
};

export const loadProductSuccess = (product) => {
    return {
        type: types.LOAD_PRODUCT,
        payload: product
    }
};

export const loadProductDetailsSuccess = (product) => {
    return {
        type: types.LOAD_PRODUCT_DETAILS,
        payload: product
    }
};

export const loadIngredientsSuccess = (ingredients) => {
    return {
        type: types.LOAD_INGREDIENTS,
        payload: ingredients
    }
};

export const loadCategoriesSuccess = (categories) => {
    return {
        type: types.LOAD_CATEGORIES,
        payload: categories
    }
};

export const categoryChange = (category) => {
    return {
        type: types.SELECT_CATEGORY,
        payload: category
    }
};


//Async Action
export const loadProducts = (categoryId) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}food/products/${categoryId}`)
            .then(response => {
                dispatch(loadProductsSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const loadProduct = (productId) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}food/product/${productId}`)
            .then(response => {
                dispatch(loadProductSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const loadProductDetails = (productId) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}food/product-details/${productId}`)
            .then(response => {
                dispatch(loadProductDetailsSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const loadIngredients = (categoryId) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}food/ingredients/${categoryId}`)
            .then(response => {
                dispatch(loadIngredientsSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const loadCategories = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}food/categories`)
            .then(response => {
                dispatch(loadCategoriesSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};