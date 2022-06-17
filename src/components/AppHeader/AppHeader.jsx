import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import SiteLogo from '../SiteLogo/SiteLogo';
import { RECIPES_LIST_PAGE, ADD_RECIPE_PAGE } from '../../pages/Paths';
import { SearchContext } from '../../context/Search/SearchContext';
import {
  AppBarStyled,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  AddNewRecipeBtn,
} from './AppHeader.styles';

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateSearchQuery } = useContext(SearchContext);

  const handleClick = () => {
    navigate(ADD_RECIPE_PAGE);
  };

  const searchRecipe = e => {
    updateSearchQuery(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled position="static">
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={12} sm={5} md={6} lg={6}>
              <SiteLogo />
            </Grid>
            <Grid
              container
              item
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              xs={9}
              sm={3}
              md={3}
              lg={3}
            >
              {location.pathname === RECIPES_LIST_PAGE && (
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    onChange={searchRecipe}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              )}
            </Grid>
            <Grid
              container
              item
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              xs={3}
              sm={4}
              md={3}
              lg={3}
            >
              <AddNewRecipeBtn
                startIcon={<AddCircleIcon />}
                variant="contained"
                size="large"
                fullWidth
                onClick={handleClick}
              >
                Add{' '}
                <Typography variant="span" sx={{ display: { xs: 'none', sm: 'block' } }}>
                  &nbsp;a new recipe!
                </Typography>
              </AddNewRecipeBtn>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBarStyled>
    </Box>
  );
};

export default AppHeader;
