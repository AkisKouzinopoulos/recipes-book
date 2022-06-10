import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArchiveIcon from '@mui/icons-material/Archive';
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
    <Grid container spacing={2} alignItems="center" mt={0.1}>
      <Grid item xs={12} sm={6}>
        <RecipeStepper />
      </Grid>
      <Grid item xs={12} sm={6}
        container
        justifyContent="center"
        alignItems="center">
        <Button startIcon={<ArchiveIcon />} variant="contained" size="large" onClick={handleAddRecipe}>Add it!</Button>
      </Grid>
    </Grid>
  )
}

export default AddRecipe;
