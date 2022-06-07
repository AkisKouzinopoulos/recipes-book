import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import { RecipesContext } from '../context/Recipes/RecipesContext';
import { addNewRecipe } from '../context/Recipes/RecipesActions';

const AddRecipe = () => {
  // const [recipes, setRecipes] = useState([]);

  // const [newRecipe, setNewRecipe] = useState([]);
  const [error, setError] = useState(false);

  const { recipes, isLoading, dispatch } = useContext(RecipesContext);

  const testRecipe = {
    "title": "Omelete",
    "description": "Easy omelete",
    "img": "an-image-url",
    "totalSteps": 2,
    "difficulty": "Easy",
    "rating": 4,
    "steps": [
      "step one description",
      "step two description"
    ]
  }

  // useEffect(() => {
  //   RecipesBookApiClient.getRecipes()
  //     .then(response => {
  //       setError(false);
  //       setRecipes(response);
  //       setIsLoading(false);
  //     })
  //     .catch(() => {
  //       setError(true);
  //       setIsLoading(false);
  //     });
  // }, []);

  const handleAddRecipe = () => {
    dispatch({ type: 'ADD_RECIPE', payload: testRecipe })
  }

  return (
    <>
      <div>Add Recipe page</div>
      <Button onClick={handleAddRecipe}>Add</Button>
    </>
  )
}

export default AddRecipe;
