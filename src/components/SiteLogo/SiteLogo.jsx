import React from 'react';
import { Link } from 'react-router-dom';
import { RECIPES_LIST_PAGE } from '../../pages/Paths';

// Assets
import siteLogo from '../../assets/logoipsum-logo-26.svg';

const SiteLogo = () => (
  <Link to={RECIPES_LIST_PAGE}>
    <img src={siteLogo} alt="Recipes book site logo" />
  </Link>
);

export default SiteLogo;
