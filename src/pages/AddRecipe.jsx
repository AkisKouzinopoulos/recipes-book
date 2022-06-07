import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import { RecipesContext } from '../context/Recipes/RecipesContext';

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

const AddRecipe = () => {

  // const [newRecipe, setNewRecipe] = useState([]);
  const [error, setError] = useState(false);

  const { dispatch } = useContext(RecipesContext);



  const handleAddRecipe = () => {
    dispatch({ type: 'ADD_RECIPE', payload: testRecipe });
  }

  return (
    <>
      <div>Add Recipe page</div>
      <Button onClick={handleAddRecipe}>Add</Button>
    </>
  )
}

export default AddRecipe;
