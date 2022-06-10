import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IngredientsList from '../components/IngredientsList/IngredientsList';
import { RecipesContext } from '../context/Recipes/RecipesContext';
import { fetchRecipeDetails } from '../context/Recipes/RecipesActions';
import { RecipeContainer, RecipeDetailsTitle, RecipeDetailsDescription } from './Recipe.styles';

const Recipe = () => {
  const { id } = useParams();

  const [error, setError] = useState(false);

  const { recipeDetails, isLoading, dispatch } = useContext(RecipesContext);
  const { title, description, ingredients, steps } = recipeDetails;

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getRecipeDetails = async () => {
      const recipeDetailsData = await fetchRecipeDetails(id);
      dispatch({ type: 'GET_RECIPE_DETAILS', payload: recipeDetailsData })
    };
    getRecipeDetails();
  }, [dispatch, id]);

  return (
    <RecipeContainer>
      <Grid container spacing={0}>

        <Grid xs={10} sm={9} md={8}
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <RecipeDetailsTitle>{title}</RecipeDetailsTitle>
          <RecipeDetailsDescription>{description}</RecipeDetailsDescription>
        </Grid>
        <Grid xs={2} sm={3} md={4}
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <img src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&amp;h=164&amp;fit=crop&amp;auto=format" srcSet="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&amp;h=164&amp;fit=crop&amp;auto=format&amp;dpr=2 2x" alt="Sea star" loading="lazy" className="MuiImageListItem-img" />
        </Grid>

        <Grid xs={12}
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <IngredientsList ingredients={ingredients} />
          <Typography variant="h3" mt={5} mb={2}>INSTRUCTIONS</Typography>
          {steps?.map((step, index) =>
            // eslint-disable-next-line react/no-array-index-key
            <Typography key={index} variant="body1">{step}</Typography>
          )}
        </Grid>

      </Grid>
    </RecipeContainer >
  )
}

export default Recipe;
