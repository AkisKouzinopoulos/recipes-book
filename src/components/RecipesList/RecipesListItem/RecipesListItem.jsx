import React from 'react'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IngredientsList from '../../IngredientsList/IngredientsList';

import { RecipeContainer, RecipeOverview, DifficultyLabel, RecipeMadeInSteps, RecipeDescription, RecipeReadMore, RecipeImgContainer, RecipeIngredients, RecipeInfoIcons } from './RecipesListItem.styles';

const RecipesListItem = ({ recipe }) => {
  const { title, description, totalSteps, difficulty, ingredients } = recipe;

  return (
    <Grid item xs={12} >
      <RecipeContainer sx={{
        my: 1,
        mx: 'auto',
        p: 0,
      }}>
        <Link to={`/recipes/${recipe.id}`}>
          <Grid container spacing={0}>
            <RecipeImgContainer item xs={12} sm={3}>
              <img src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&amp;h=164&amp;fit=crop&amp;auto=format" srcSet="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&amp;h=164&amp;fit=crop&amp;auto=format&amp;dpr=2 2x" alt="Sea star" loading="lazy" className="MuiImageListItem-img" />
            </RecipeImgContainer>
            <RecipeOverview xs={12} sm={6}
              item
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
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                }}>{description}</RecipeDescription>
              <RecipeReadMore variant="body1">READ <span>MORE</span></RecipeReadMore>
              <RecipeInfoIcons>Vg, Sp</RecipeInfoIcons>
            </RecipeOverview>
            <RecipeIngredients xs={12} sm={3}
              container
              item
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <IngredientsList ingredients={ingredients} />
            </RecipeIngredients>
          </Grid>
        </Link>
      </RecipeContainer>
    </Grid>
  )
};

export default RecipesListItem;
