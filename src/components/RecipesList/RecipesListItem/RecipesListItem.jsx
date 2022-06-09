import React from 'react'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { RecipeContainer, RecipeOverview, DifficultyLabel, RecipeMadeInSteps, RecipeDescription, RecipeReadMore, RecipeImgContainer, RecipeIngredients, RecipeIngredientsList } from './RecipesListItem.styles';

const RecipesListItem = ({ recipe }) => {
  const { title, description, totalSteps, difficulty } = recipe;

  return (
    <Grid item xs={12} >
      <RecipeContainer sx={{
        my: 1,
        mx: 'auto',
        p: 0,
      }}>
        <Link to={`/recipes/${recipe.id}`}>
          <Grid container spacing={0}>
            <RecipeImgContainer item xs={3}>
              <img src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&amp;h=164&amp;fit=crop&amp;auto=format" srcSet="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&amp;h=164&amp;fit=crop&amp;auto=format&amp;dpr=2 2x" alt="Sea star" loading="lazy" className="MuiImageListItem-img" />
            </RecipeImgContainer>
            <RecipeOverview xs={5}
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <DifficultyLabel variant="h3">{difficulty}</DifficultyLabel>
              <Typography variant="h2">{title}</Typography>
              <RecipeMadeInSteps variant="h4">CREATE IN <span>{totalSteps}</span> STEPS</RecipeMadeInSteps>
              <RecipeDescription variant="body1"
                sx={{
                  // overflow: 'hidden',
                  // textOverflow: 'ellipsis',
                  // display: '-webkit-box',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                }}>{description}</RecipeDescription>
              <RecipeReadMore variant="body1">READ <span>MORE</span></RecipeReadMore>
            </RecipeOverview>
            <RecipeIngredients xs={3}
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Typography variant="h3">INGREDIENTS</Typography>
              <RecipeIngredientsList>
                <li>1/2 cup sour cream</li>
                <li>2 Tbsp lemon juice</li>
                <li>1/2 tsp dried dill</li>
              </RecipeIngredientsList>
            </RecipeIngredients>
            <Grid item xs={1}>
              Veg, Ht
            </Grid>
          </Grid>
        </Link>
      </RecipeContainer>
    </Grid>
  )
};

export default RecipesListItem;
