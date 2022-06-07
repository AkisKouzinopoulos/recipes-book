import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { RECIPES_LIST_PAGE, RECIPE_PAGE, ADD_RECIPE_PAGE } from './pages/Paths';
import { theme } from './Theme';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import AddRecipe from './pages/AddRecipe';
import { RecipesProvider } from './context/Recipes/RecipesContext';
// Css
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => (
  <Router>
    <RecipesProvider>
      <Stack direction="row" justifyContent="center" sx={{ m: 1 }}>
        <ThemeProvider theme={theme}>
          <Grid container maxWidth="lg">
            <Routes>
              <Route path={RECIPES_LIST_PAGE} element={<Home />} />
              <Route path={`${RECIPE_PAGE}:id`} element={<Recipe />} />
              <Route path={ADD_RECIPE_PAGE} element={<AddRecipe />} />
            </Routes>
          </Grid>
        </ThemeProvider>
      </Stack>
    </RecipesProvider>
  </Router>
);

export default App;
