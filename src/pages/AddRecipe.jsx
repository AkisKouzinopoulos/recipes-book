import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { RECIPES_LIST_PAGE } from "./Paths";
import { RecipesContext } from '../context/Recipes/RecipesContext';
import RecipeStepper from '../components/RecipeStepper/RecipeStepper';

const AddRecipe = () => {

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { dispatch } = useContext(RecipesContext);

  const handleAddRecipe = () => {
    dispatch({ type: 'ADD_RECIPE' });
    dispatch({ type: 'CLEAR_NEW_RECIPE' });
    navigate(RECIPES_LIST_PAGE);
  }

  return (
    <Box>
      <div>Add Recipe page</div>
      <RecipeStepper />
      <Button onClick={handleAddRecipe}>Add</Button>
    </Box>
  )
}

export default AddRecipe;
