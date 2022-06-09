import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';
import { RECIPES_LIST_PAGE, RECIPE_PAGE, ADD_RECIPE_PAGE } from './pages/Paths';
import { theme } from './Theme';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import AddRecipe from './pages/AddRecipe';
import AppHeader from './components/AppHeader/AppHeader';
import { RecipesProvider } from './context/Recipes/RecipesContext';

// Css
import './App.css';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

const MainContainer = styled(Container)`
  background: var(--lightGreyBg);
  padding: 0;
  padding-top: 42px;
  margin: 0 auto;
`;

const App = () => (
  <Router>
    <RecipesProvider>
      <ThemeProvider theme={theme}>
        <MainContainer maxWidth="lg">
          <AppHeader />
          <Grid container maxWidth="lg">
            <Routes>
              <Route path={RECIPES_LIST_PAGE} element={<Home />} />
              <Route path={`${RECIPE_PAGE}:id`} element={<Recipe />} />
              <Route path={ADD_RECIPE_PAGE} element={<AddRecipe />} />
            </Routes>
          </Grid>
        </MainContainer>
      </ThemeProvider>
    </RecipesProvider>
  </Router>
);

export default App;
