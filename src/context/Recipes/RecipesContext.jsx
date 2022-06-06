import React, { createContext, useReducer, ReactNode, useMemo } from 'react';
import { recipesReducer } from './RecipesReducer';

const initialState = {
  recipes: [],
  recipeDetails: {},
  isLoading: false,
  error: false,
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
