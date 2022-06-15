import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IngredientsList from '../components/IngredientsList/IngredientsList';
import RecipeRating from '../components/RecipeRating/RecipeRating';
import { RecipesContext } from '../context/Recipes/RecipesContext';
import { fetchRecipeDetails } from '../context/Recipes/RecipesActions';
import {
  RecipeContainer,
  RecipeDetailsTitle,
  RecipeDetailsDescription,
  StrippedTextSmall,
} from './Recipe.styles';
import { DifficultyLabel } from '../components/RecipesList/RecipesListItem/RecipesListItem.styles';

const Recipe = () => {
  const { id } = useParams();

  const [error, setError] = useState(false);

  const { recipeDetails, isLoading, dispatch } = useContext(RecipesContext);
  const { title, description, imgUrl, ingredients, steps, rating, difficulty, preparationTime } =
    recipeDetails;

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getRecipeDetails = async () => {
      const recipeDetailsData = await fetchRecipeDetails(id);
      dispatch({ type: 'GET_RECIPE_DETAILS', payload: recipeDetailsData });
    };
    getRecipeDetails();
  }, [dispatch, id]);

  return (
    <RecipeContainer>
      <Grid container spacing={0}>
        <Grid
          xs={12}
          sm={9}
          md={8}
          container
          item
          direction="column"
          justifyContent="start"
          alignItems="flex-start"
        >
          <RecipeDetailsTitle>{title}</RecipeDetailsTitle>
          <RecipeDetailsDescription my={3}>{description}</RecipeDetailsDescription>
          <Typography variant="body1">
            Preparation time:
            <StrippedTextSmall variant="h2" component="span">
              &nbsp;{preparationTime}
            </StrippedTextSmall>
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={3}
          md={4}
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ overflow: 'hidden' }}
        >
          <Grid
            container
            item
            spacing={0}
            direction="column"
            justifyContent="center"
            alignItems={{
              xs: 'flex-start',
              sm: 'flex-end',
            }}
          >
            {imgUrl && (
              <Box
                fullWidth
                component="img"
                sx={{
                  content: {
                    xs: `url(${imgUrl}?max-w=390&max-h=200&fit=crop&auto=format})`,
                    sm: `url(${imgUrl}?max-w=170&max-h=170&fit=crop&auto=format})`,
                    md: `url(${imgUrl}?max-w=314&max-h=200&fit=crop&auto=format})`,
                  },
                }}
                alt={title}
              />
            )}
            <Grid
              container
              direction="column"
              justifyContent={{
                xs: 'start',
                sm: 'center',
              }}
              alignItems={{
                xs: 'start',
                sm: 'end',
              }}
              mb={{
                xs: 2,
                sm: 0,
              }}
            >
              <DifficultyLabel variant="h3" mt={1}>
                {difficulty}
              </DifficultyLabel>
              <RecipeRating readonly ratingValue={rating} size="small" />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          xs={12}
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <IngredientsList ingredients={ingredients} />
          <Typography variant="h3" mt={5} mb={2}>
            INSTRUCTIONS
          </Typography>
          {steps?.map((step, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Typography key={index} variant="body1">
              {step}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </RecipeContainer>
  );
};

export default Recipe;
