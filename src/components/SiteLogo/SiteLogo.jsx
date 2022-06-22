import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { RECIPES_LIST_PAGE } from '../../pages/Paths';

// Assets
import siteLogo from '../../assets/logoipsum-logo-26.svg';

const SiteLogo = () => (
  <Box sx={{ marginRight: '10px' }}>
    <Link to={RECIPES_LIST_PAGE}>
      <img src={siteLogo} alt="Recipes book site logo" />
    </Link>
  </Box>
);

export default SiteLogo;
