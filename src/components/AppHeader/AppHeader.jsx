import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SiteLogo from "../SiteLogo/SiteLogo";
import { AppBarStyled, Search, SearchIconWrapper, StyledInputBase, AddNewRecipeBtn } from './AppHeader.styles';

const AppHeader = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBarStyled position="static">
      <Toolbar>
        <Grid container
          alignItems="center">
          <Grid item xs={6}>
            <SiteLogo />
          </Grid>
          <Grid container
            item
            direction="row"
            justifyContent="end"
            alignItems="center"
            xs={6}
          >
            <Search >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <AddNewRecipeBtn startIcon={<AddCircleIcon />} variant="contained" size="large">Add a new recipe!</AddNewRecipeBtn>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBarStyled>
  </Box>
)

export default AppHeader;
