import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RecipesContext } from '../context/Recipes/RecipesContext';
import { fetchRecipeDetails } from '../context/Recipes/RecipesActions';

const Recipe = () => {
  const { id } = useParams();

  const [error, setError] = useState(false);

  const { recipeDetails, isLoading, dispatch } = useContext(RecipesContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getRecipeDetails = async () => {
      const recipeDetailsData = await fetchRecipeDetails(id);
      dispatch({ type: 'GET_RECIPE_DETAILS', payload: recipeDetailsData })
    };
    getRecipeDetails();
  }, [dispatch, id]);

  return (
    <>
      <div>Recipe page</div>
      <div>Title: {recipeDetails.title}</div>
    </>
  )
}

export default Recipe;
