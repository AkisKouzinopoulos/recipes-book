import React from 'react'
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { RecipeContainer } from './RecipesListItem.styles';

const RecipesListItem = ({ recipe }) => (
  <Grid item xs={12} >
    <Paper sx={{
      my: 1,
      mx: 'auto',
      p: 2,
    }}>
      <Link to={`/recipes/${recipe.id}`}>
        <RecipeContainer>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <img src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&amp;h=164&amp;fit=crop&amp;auto=format" srcSet="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&amp;h=164&amp;fit=crop&amp;auto=format&amp;dpr=2 2x" alt="Sea star" loading="lazy" className="MuiImageListItem-img" />
            </Grid>
            <Grid item xs={10}>
              {recipe.title}
            </Grid>
          </Grid>
        </RecipeContainer>
      </Link>
    </Paper>
  </Grid>
)

export default RecipesListItem;
