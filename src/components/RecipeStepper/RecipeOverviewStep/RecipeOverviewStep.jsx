/* eslint-disable react/no-array-index-key */
import React, { useState, useContext } from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RecipeRating from '../../RecipeRating/RecipeRating';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';

const RecipeOverviewStep = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [prepTime, setPrepTime] = useState('');

  const [allergens, setAllergens] = useState([]);

  const { dispatch } = useContext(RecipesContext);

  const handleTitleChange = e => {
    setRecipeTitle(e.target.value);
  };

  const handleDescriptionChange = e => {
    setRecipeDescription(e.target.value);
  };

  const handleDifficultyChange = e => {
    setDifficulty(e.target.value);
  };

  const handlePrepTimeChange = e => {
    setPrepTime(e.target.value);
  };

  const handleAllergenChange = e => {
    const newAllergens = [...allergens];
    const allergenIndex = newAllergens.findIndex(item => item.name === e.target.name);

    if (allergenIndex === -1) {
      newAllergens.push({ name: e.target.name, checked: true });
    } else {
      newAllergens.splice(allergenIndex, 1);
    }

    setAllergens(newAllergens);
  };

  const onBlurHandle = () => {
    dispatch({
      type: 'UPDATE_NEW_RECIPE',
      payload: {
        title: recipeTitle,
        description: recipeDescription,
        difficulty,
        preparationTime: prepTime,
        allergens,
      },
    });
  };

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
        <RecipeRating readonly={false} />
      </Stack>
      <TextField
        id="outlined-prep-time"
        label="Preparation time"
        value={prepTime}
        onChange={handlePrepTimeChange}
        onBlur={onBlurHandle}
      />
      <FormGroup>
        {/* {allergens.map((element, index) => ( */}
        <Grid
          container
          item
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ marginBottom: '15px' }}
        >
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  name="fish"
                  value="fish"
                  checked={allergens.fish}
                  onChange={e => handleAllergenChange(e)}
                  onBlur={onBlurHandle}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label="Fish"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="glouten"
                  value="glouten"
                  checked={allergens.glouten}
                  onChange={e => handleAllergenChange(e)}
                  onBlur={onBlurHandle}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label="Glouten"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="eggs"
                  value="eggs"
                  checked={allergens.eggs}
                  onChange={e => handleAllergenChange(e)}
                  onBlur={onBlurHandle}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label="Eggs"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="milk"
                  value="milk"
                  checked={allergens.milk}
                  onChange={e => handleAllergenChange(e)}
                  onBlur={onBlurHandle}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label="Milk"
            />
          </Grid>
        </Grid>
        {/* ))} */}
      </FormGroup>
    </Stack>
  );
};

export default RecipeOverviewStep;
