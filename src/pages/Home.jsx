import React, { useState, useEffect } from 'react';
import RecipesBookApiClient from '../clients/RecipesBookApiClient';
import ErrorAlert from '../components/ErrorAlert/ErrorAlert';
import RecipesList from '../components/RecipesList/RecipesList';

const errorMsg = "Spm error occured"
const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    RecipesBookApiClient.getRecipes()
      .then(response => {
        console.log('re', response);
        setError(false);
        setRecipes(response);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {error && <ErrorAlert message={errorMsg} />}
      {isLoading ? (
        <div>Loading...</div>
      )
        :
        (<RecipesList recipes={recipes} />)
      }
    </>
  )
};

export default Home;
