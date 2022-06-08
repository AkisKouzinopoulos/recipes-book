import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';

const RecipeOverviewStep = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');

  const { dispatch } = useContext(RecipesContext);

  const handleTitleChange = (e) => {
    setRecipeTitle(e.target.value);
    dispatch({ type: 'UPDATE_NEW_RECIPE', payload: { 'title': recipeTitle } });
  }

  const handleDescriptionChange = (e) => {
    setRecipeDescription(e.target.value);
    dispatch({ type: 'UPDATE_NEW_RECIPE', payload: { 'description': recipeDescription } });
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-required"
        label="Title"
        defaultValue=""
        onChange={handleTitleChange}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Description"
        multiline
        maxRows={4}
        value={recipeDescription}
        onChange={handleDescriptionChange}
      />
    </Box>
  )
};

export default RecipeOverviewStep;
