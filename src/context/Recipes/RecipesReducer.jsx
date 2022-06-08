import { addNewRecipe } from './RecipesActions';

export const recipesReducer = (state, action) => {
  switch (action.type) {
    case 'GET_RECIPES':
      return {
        ...state,
        recipes: action.payload,
        isLoading: false,
      };
    case 'GET_RECIPE_DETAILS':
      return {
        ...state,
        recipeDetails: action.payload,
        isLoading: false,
      };
    case 'ADD_RECIPE':
      return {
        ...state,
        recipes: [...state.recipes, addNewRecipe(action.payload)],
        isLoading: false,
      };
    case 'ADD_RECIPE_STEP':
      return {
        ...state,
        recipeSteps: [...state.recipeSteps, action.payload],
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};