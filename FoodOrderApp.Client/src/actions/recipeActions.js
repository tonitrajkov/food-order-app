
import { DELETE_RECIPE, DELETE_ALL, ADD_RECIPE, SEARCH_RECIPE, ADD_TO_CART, REMOVE_RECIPE_FROM_CART } from '../constants/actionTypes'

export const deleteRecipe = id => {
    return {
        type: DELETE_RECIPE,
        payload: id
    }
}

export const clearRecipes = () => {
    return {
        type: DELETE_ALL
    }
}

export const addRecipe = (recipe) => {
    return {
        type: ADD_RECIPE,
        payload: recipe
    }
}

export const searchRecipes = (title) => {
    return {
        type: SEARCH_RECIPE,
        payload: title
    }
}

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export const removeRecipeFromCart = (id) => {
    return {
        type: REMOVE_RECIPE_FROM_CART,
        payload: id
    }
}