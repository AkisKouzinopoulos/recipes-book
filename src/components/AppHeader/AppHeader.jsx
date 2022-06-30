import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import FaceIcon from '@mui/icons-material/Face';
import SiteLogo from '../SiteLogo/SiteLogo';
import WelcomeUser from '../WelcomeUser/WelcomeUser';
import { RECIPES_LIST_PAGE, ADD_RECIPE_PAGE, AUTHENTICATE } from '../../pages/Paths';
import { SearchContext } from '../../context/Search/SearchContext';
import {
  AppBarStyled,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  AddNewRecipeBtn,
  LoginBtn,
} from './AppHeader.styles';

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateSearchQuery } = useContext(SearchContext);

  const logedinUsername = localStorage.getItem('username');

  const searchRecipe = e => {
    updateSearchQuery(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled position="static">
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid
              container
              item
              direction={{
                xs: 'row',
                sm: 'column',
                md: 'row',
              }}
              justifyContent={{ xs: 'space-between', sm: 'flex-start', md: 'flex-start' }}
              xs={12}
              sm={5}
              md={6}
              lg={6}
            >
              <SiteLogo />
              {logedinUsername ? (
                <WelcomeUser username={logedinUsername} />
              ) : (
                <LoginBtn aria-label="login" onClick={() => navigate(AUTHENTICATE)}>
                  <FaceIcon />
                </LoginBtn>
              )}
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
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search', 'data-testid': 'searchField' }}
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
                onClick={() => navigate(ADD_RECIPE_PAGE)}
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
