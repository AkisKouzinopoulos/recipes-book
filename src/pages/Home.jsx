import React, { useState, useEffect, useContext } from 'react';
import ErrorAlert from '../components/ErrorAlert/ErrorAlert';
import RecipesList from '../components/RecipesList/RecipesList';
import { RecipesContext } from '../context/Recipes/RecipesContext';
import { fetchRecipes } from '../context/Recipes/RecipesActions';
import { SearchContext } from '../context/Search/SearchContext';

const errorMsg = 'Some error occured';

const Home = () => {
  const [error, setError] = useState(false);

  const { recipes, isLoading, dispatch } = useContext(RecipesContext);

  const { search } = useContext(SearchContext);

  let filteredRecipes = [];

  if (search !== '') {
    const results = recipes.filter(
      recipe =>
        recipe.title.toLowerCase().includes(search.toLowerCase()) ||
        recipe.description.includes(search)
    );
    filteredRecipes = results;
  } else {
    filteredRecipes = recipes;
  }

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getRecipes = async () => {
      const recipesData = await fetchRecipes();
      dispatch({ type: 'GET_RECIPES', payload: recipesData });
    };
    getRecipes();
  }, [dispatch]);

  return (
    <>
      {error && <ErrorAlert message={errorMsg} />}
      {isLoading ? <div>Loading...</div> : <RecipesList recipes={filteredRecipes} />}
    </>
  );
};

export default Home;
