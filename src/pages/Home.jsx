import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert/ErrorAlert';
import RecipesList from '../components/RecipesList/RecipesList';
import { RecipesContext } from '../context/Recipes/RecipesContext';
import { fetchRecipes } from '../context/Recipes/RecipesActions';

const errorMsg = "Some error occured";

const Home = () => {
  const [error, setError] = useState(false);

  const { recipes, isLoading, dispatch } = useContext(RecipesContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getRecipes = async () => {
      const recipesData = await fetchRecipes();
      dispatch({ type: 'GET_RECIPES', payload: recipesData })
    };
    getRecipes();
  }, [dispatch]);

  return (
    <>
      {error && <ErrorAlert message={errorMsg} />}
      {isLoading ? (
        <div>Loading...</div>
      )
        :
        (<RecipesList recipes={recipes} />)
      }
      <Link to="/new-recipe/">
        <div>Add a new recipe</div>
      </Link>
    </>
  )
};

export default Home;
