import { ADD_RECIPE, DELETE_ALL, DELETE_RECIPE, SEARCH_RECIPE, ADD_TO_CART, REMOVE_RECIPE_FROM_CART } from '../constants/actionTypes'

const initState = {
    recipes: [],
    filter: '',
    addedToCartRecipes: [],
    products: [],
    ingredients: [],
    categories: [],
    product: {}
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case DELETE_RECIPE:
            let newRecipes = state.recipes.filter(recipe => {
                return action.payload !== recipe.id
            })
            let cartRecipes = state.addedToCartRecipes.filter(r => {
                return action.payload !== r.id
            })
            return {
                ...state,
                recipes: newRecipes,
                addedToCartRecipes: cartRecipes
            }
        case DELETE_ALL:
            return {
                recipes: [],
                addedToCartRecipes: []
            }
        case SEARCH_RECIPE:
            return {
                ...state,
                filter: action.payload,
            }
        case ADD_TO_CART:
            const addedToCartRecipe = state.recipes.find(recipe => recipe.id === action.payload)
            const existingRecipe = state.addedToCartRecipes.find(recipe => action.payload === recipe.id)
            if (existingRecipe) {
                return {
                    ...state,
                }
            }
            else {
                return {
                    ...state,
                    addedToCartRecipes: [...state.addedToCartRecipes, addedToCartRecipe],
                }
            }
        case REMOVE_RECIPE_FROM_CART:
            let newCartRecipes = state.addedToCartRecipes.filter(recipe => action.payload !== recipe.id)
            return {
                ...state,
                addedToCartRecipes: newCartRecipes
            }
        default:
            return state
    }
}

export default rootReducer