import React, { useState, useEffect, useContext } from 'react';
import RecipesBookApiClient from '../clients/RecipesBookApiClient';
import { RecipesContext } from '../context/Recipes/RecipesContext';
import ErrorAlert from '../components/ErrorAlert/ErrorAlert';

const errorMsg = "Spm error occured"
const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { dispatch } = useContext(RecipesContext);


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
    // dispatch({ type: 'CLEAR_STATE_TERMINALS' });
  }, []);

  return (
    <>
      {error && <ErrorAlert message={errorMsg} />}
      {isLoading ? (
        <div>Loading...</div>
      )
        :
        (<div recipes={recipes} />)
      }
    </>
  )
};

export default Home;
