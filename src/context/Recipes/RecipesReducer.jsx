import { addNewRecipe, editRecipe } from './RecipesActions';

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
        recipes: [...state.recipes, addNewRecipe(state.newRecipe)],
        isLoading: false,
      };
    case 'EDIT_RECIPE':
      return {
        ...state,
        recipes: [...state.recipes, editRecipe(state.newRecipe)],
        isLoading: false,
      };
    case 'UPDATE_NEW_RECIPE':
      console.log('action', action.payload);

      return {
        ...state,
        newRecipe: { ...state.newRecipe, ...action.payload },
      };
    case 'CLEAR_NEW_RECIPE':
      return {
        ...state,
        newRecipe: {},
      };
    case 'USER_LOGED_IN':
      return {
        ...state,
        userIsLoggedIn: action.payload,
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
