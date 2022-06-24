import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import IngredientsList from '../../IngredientsList/IngredientsList';
import AllergensList from '../../AllergensList/AllergensList';
import { RECIPE_PAGE, EDIT_RECIPE_PAGE } from '../../../pages/Paths';
import {
  RecipeContainer,
  RecipeOverview,
  DifficultyLabel,
  RecipeMadeInSteps,
  RecipeDescription,
  RecipeReadMore,
  RecipeImgContainer,
  RecipeIngredients,
  RecipeLink,
  EditRecipeBtnContainer,
} from './RecipesListItem.styles';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';

const RecipesListItem = ({ recipe }) => {
  const navigate = useNavigate();
  const { id, title, imgUrl, description, totalSteps, difficulty, ingredients, allergens } = recipe;
  const userIsLoggedIn = localStorage.getItem('username');

  const { dispatch } = useContext(RecipesContext);

  return (
    <Grid item xs={12}>
      <RecipeContainer
        sx={{
          my: 1,
          mx: 'auto',
          p: 0,
        }}
      >
        <Grid container spacing={0}>
          <RecipeImgContainer
            container
            item
            xs={12}
            sm={12}
            md={3}
            justifyContent="center"
            alignItems="center"
          >
            {imgUrl && (
              <Box
                component="img"
                sx={{
                  content: {
                    xs: `url(${imgUrl}?max-w=425&max-h=200&fit=crop&auto=format})`,
                    sm: `url(${imgUrl}?max-w=768&max-h=250&fit=crop&auto=format})`,
                    md: `url(${imgUrl}?max-w=300&max-h=450&fit=crop&auto=format})`,
                  },
                }}
                alt={title}
              />
            )}
          </RecipeImgContainer>
          <RecipeOverview
            xs={12}
            sm={7}
            md={6}
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <DifficultyLabel variant="h3">{difficulty}</DifficultyLabel>
            <RecipeLink to={`${RECIPE_PAGE}${id}`}>
              <Typography variant="h2">{title}</Typography>
            </RecipeLink>
            <RecipeMadeInSteps variant="h4">
              CREATE IN <span>{totalSteps || '0'}</span> STEPS
            </RecipeMadeInSteps>
            <RecipeDescription
              variant="body1"
              sx={{
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical',
              }}
            >
              {description}
            </RecipeDescription>
            <RecipeReadMore variant="body1">
              <RecipeLink to={`${RECIPE_PAGE}${id}`}>
                READ <span>MORE</span>
              </RecipeLink>
            </RecipeReadMore>
            <AllergensList allergens={allergens} />
          </RecipeOverview>
          <RecipeIngredients
            xs={12}
            sm={5}
            md={3}
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <IngredientsList ingredients={ingredients} />
          </RecipeIngredients>
        </Grid>
        {userIsLoggedIn && (
          <EditRecipeBtnContainer>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={() => navigate(`${EDIT_RECIPE_PAGE}${id}`)}
            >
              Edit recipe
            </Button>
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => dispatch({ type: 'DELETE_RECIPE', payload: id })}
            >
              <DeleteIcon />
            </IconButton>
          </EditRecipeBtnContainer>
        )}
      </RecipeContainer>
    </Grid>
  );
};

export default RecipesListItem;
