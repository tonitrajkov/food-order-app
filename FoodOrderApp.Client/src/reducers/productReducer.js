import * as types from '../constants/actionTypes'

const initState = {
    products: [],
    ingredients: [],
    categories: [],
    product: {},
    productDetails: {},
    selectedCategory: {}
};

export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case types.LOAD_PRODUCT:
            return {
                ...state,
                product: action.payload
            };
        case types.LOAD_PRODUCT_DETAILS:
            return {
                ...state,
                productDetails: action.payload
            };
        case types.LOAD_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload
            };
        case types.LOAD_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                selectedCategory: action.payload[0]
            };
        case types.SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            };
        default:
            return state;
    }
}

export default productReducer