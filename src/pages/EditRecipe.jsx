import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArchiveIcon from '@mui/icons-material/Archive';
import { RECIPES_LIST_PAGE } from './Paths';
import { RecipesContext } from '../context/Recipes/RecipesContext';
import EditRecipeStepper from '../components/EditRecipeStepper/EditRecipeStepper';

const EditRecipe = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { dispatch, newRecipe } = useContext(RecipesContext);

  const handleEditRecipe = () => {
    dispatch({ type: 'EDIT_RECIPE' });
    dispatch({ type: 'CLEAR_NEW_RECIPE' });
    navigate(RECIPES_LIST_PAGE);
  };

  const enableAddBtn =
    newRecipe?.title?.length > 0 &&
    newRecipe?.description?.length > 0 &&
    newRecipe.steps?.length > 0 &&
    newRecipe.ingredients?.length > 0;

  return (
    <Grid container spacing={2} alignItems="center" mt={0.1}>
      <Grid item xs={12} sm={6}>
        <EditRecipeStepper />
      </Grid>
      <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
        <Button
          // disabled={!enableAddBtn}
          startIcon={<ArchiveIcon />}
          variant="contained"
          size="large"
          onClick={handleEditRecipe}
        >
          Finished!
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditRecipe;
