import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import { RecipesContext } from '../context/Recipes/RecipesContext';
import RecipeStepper from '../components/RecipeStepper/RecipeStepper';

const testRecipe = {
  "title": "Omelete",
  "description": "Easy omelete",
  "img": "an-image-url",
  "totalSteps": 2,
  "difficulty": "Easy",
  "rating": 4,
  "ingredients": [
    {
      "ingredient": "eggs",
      "quantity": "x 2"
    },
    {
      "ingredient": "more eggs",
      "quantity": "x 4"
    }
  ],
  "steps": [
    "step one description",
    "step two description"
  ]
}

const AddRecipe = () => {

  // const [newRecipe, setNewRecipe] = useState([]);
  const [error, setError] = useState(false);

  const { dispatch } = useContext(RecipesContext);

  const handleAddRecipe = () => {
    dispatch({ type: 'ADD_RECIPE' });
  }

  return (
    <>
      <div>Add Recipe page</div>
      <RecipeStepper />
      <Button onClick={handleAddRecipe}>Add</Button>
    </>
  )
}

export default AddRecipe;
