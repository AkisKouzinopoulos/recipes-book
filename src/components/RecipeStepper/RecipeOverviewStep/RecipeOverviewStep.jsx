/* eslint-disable react/no-array-index-key */
import React, { useState, useContext } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RecipeRating from '../../RecipeRating/RecipeRating';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';

const RecipeOverviewStep = () => {
  const initialOverview = {
    title: '',
    description: '',
    difficulty: '',
    preparationTime: '',
    imgUrl: '',
  };
  const [overview, setOverview] = useState(initialOverview);

  const { dispatch } = useContext(RecipesContext);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setOverview({
      ...overview,
      [name]: value,
    });
  };

  const onBlurHandle = () => {
    const { title, description, difficulty, preparationTime, imgUrl } = overview;
    dispatch({
      type: 'UPDATE_NEW_RECIPE',
      payload: {
        title,
        description,
        difficulty,
        preparationTime,
        imgUrl,
      },
    });
  };

  return (
    <Stack direction="column" spacing={2}>
      <TextField
        required
        id="outlined-required"
        label="Title"
        value={overview.title}
        name="title"
        onChange={handleInputChange}
        onBlur={onBlurHandle}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Description"
        multiline
        maxRows={4}
        value={overview.recipeDescription}
        name="description"
        onChange={handleInputChange}
        onBlur={onBlurHandle}
      />
      <Stack direction="row" spacing={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={overview.difficulty}
            defaultValue="easy"
            label="Difficulty"
            name="difficulty"
            onChange={handleInputChange}
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
        value={overview.preparationTime}
        name="preparationTime"
        onChange={handleInputChange}
        onBlur={onBlurHandle}
      />
      <TextField
        id="outlined-img-url"
        label="Image Url"
        value={overview.imgUrl}
        name="imgUrl"
        onChange={handleInputChange}
        onBlur={onBlurHandle}
      />
    </Stack>
  );
};

export default RecipeOverviewStep;
