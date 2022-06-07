import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

import RecipesBookApiClient from '../clients/RecipesBookApiClient';

const AddRecipe = () => {
  // const [newRecipe, setNewRecipe] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

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

  useEffect(() => {
    RecipesBookApiClient.getRecipes()
      .then(response => {
        setError(false);
        setRecipes(response);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  const handleAddRecipe = () => {
    RecipesBookApiClient.addRecipe(testRecipe)
      .then(response => {
        setError(false);
        // setNewRecipe(response);
        setRecipes(...recipes, response);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }

  return (
    <>
      <div>Add Recipe page</div>
      <Button onClick={handleAddRecipe}>Add</Button>
    </>
  )
}

export default AddRecipe;
