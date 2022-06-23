/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RecipeRating from '../../RecipeRating/RecipeRating';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';
import { fetchRecipeDetails } from '../../../context/Recipes/RecipesActions';

const EditRecipeOverviewStep = () => {
  const { id } = useParams();
  const initialOverview = {
    title: '',
    description: '',
    difficulty: '',
    preparationTime: '',
    imgUrl: '',
  };
  const [overview, setOverview] = useState(initialOverview);
  const { isLoading, dispatch } = useContext(RecipesContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getRecipeDetails = async () => {
      const recipeDetailsData = await fetchRecipeDetails(id);
      dispatch({ type: 'GET_RECIPE_DETAILS', payload: recipeDetailsData });
      setOverview({
        title: recipeDetailsData?.title,
        description: recipeDetailsData?.description,
        difficulty: recipeDetailsData?.difficulty,
        preparationTime: recipeDetailsData?.preparationTime,
        imgUrl: recipeDetailsData?.imgUrl,
      });
      dispatch({ type: 'UPDATE_NEW_RECIPE', payload: recipeDetailsData }); //  Fill the temp newRecipe with the recipe's data
    };
    getRecipeDetails();
  }, [dispatch, id]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    const newOverview = { ...overview };
    newOverview[name] = value;
    const { title, description, difficulty, preparationTime, imgUrl } = newOverview;

    setOverview({
      ...newOverview,
      [name]: value,
    });
    dispatch({
      type: 'UPDATE_NEW_RECIPE',
      payload: {
        id,
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
      />
      <TextField
        required
        id="outlined-multiline-flexible"
        label="Description"
        multiline
        maxRows={4}
        value={overview.description}
        name="description"
        onChange={handleInputChange}
      />
      <Stack direction="row" spacing={3}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={overview.difficulty}
            defaultValue="Easy"
            label="Difficulty"
            name="difficulty"
            onChange={handleInputChange}
          >
            <MenuItem value="Easy &amp; fast">Easy &amp; fast</MenuItem>
            <MenuItem value="Easy">Easy</MenuItem>
            <MenuItem value="Medium &amp; fast">Medium &amp; fast</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Expert &amp; fast">Expert &amp; fast</MenuItem>
            <MenuItem value="Expert">Expert</MenuItem>
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
      />
      <TextField
        id="outlined-img-url"
        label="Image Url"
        value={overview.imgUrl}
        name="imgUrl"
        onChange={handleInputChange}
      />
    </Stack>
  );
};

export default EditRecipeOverviewStep;
