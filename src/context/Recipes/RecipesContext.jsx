import React, { createContext, useReducer, useMemo } from 'react';
import { recipesReducer } from './RecipesReducer';

const initialState = {
  recipes: [],
  recipeDetails: {},
  newRecipe: {},
  isLoading: false,
  error: false,
  userIsLoggedIn: false,
};

export const RecipesContext = createContext(initialState);

export const RecipesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipesReducer, initialState);

  const allRecipes = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state]
  );

  return <RecipesContext.Provider value={allRecipes}>{children}</RecipesContext.Provider>;
};
