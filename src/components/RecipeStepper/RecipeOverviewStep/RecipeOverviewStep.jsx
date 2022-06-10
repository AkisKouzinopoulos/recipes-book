import React, { useState, useContext } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RecipeRating from '../RecipeRating/RecipeRating';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';

const RecipeOverviewStep = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const { dispatch } = useContext(RecipesContext);

  const handleTitleChange = (e) => {
    setRecipeTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setRecipeDescription(e.target.value);
  }

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  }

  const onBlurHandle = () => {
    dispatch({
      type: 'UPDATE_NEW_RECIPE', payload: {
        'title': recipeTitle,
        'description': recipeDescription,
        difficulty
      }
    });
  }

  return (
    <Stack direction="column" spacing={2}>
      <TextField
        required
        id="outlined-required"
        label="Title"
        defaultValue=""
        onChange={handleTitleChange}
        onBlur={onBlurHandle}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Description"
        multiline
        maxRows={4}
        value={recipeDescription}
        onChange={handleDescriptionChange}
        onBlur={onBlurHandle}
      />
      <Stack direction="row" spacing={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={difficulty}
            label="Difficulty"
            onChange={handleDifficultyChange}
            onBlur={onBlurHandle}
          >
            <MenuItem value="easyfast">Easy &amp; fast</MenuItem>
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="mediumfast">Medium &amp; fast</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="expertfast">Expert &amp; fast</MenuItem>
            <MenuItem value="expert">Expert</MenuItem>
          </Select>
        </FormControl>
        <RecipeRating />
      </Stack>

    </Stack>
  )
};

export default RecipeOverviewStep;
