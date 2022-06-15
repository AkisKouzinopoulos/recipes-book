import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';

export const RecipeLink = styled(Link)`
  color: inherit;
  transition: all 0.2s ease-in-out;

  :hover {
    color: #fbc41b;
  }
`;

export const RecipeContainer = styled(Paper)`
  background: #fff;
  border-radius: 0;
  a {
    text-decoration: none;
  }
`;

export const RecipeOverview = styled(Grid)`
  background: #2a2a2a;
  color: #fff;
  padding: 40px 30px;
`;

export const RecipeImgContainer = styled(Grid)`
  // img {
  //   height: 100%;
  // }
  overflow: hidden;
`;

export const DifficultyLabel = styled(Typography)`
  color: #fff;
  background: #fbc41b;
  padding: 5px 10px;
  width: fit-content;
  margin-bottom: 5px;
`;

export const RecipeMadeInSteps = styled(Typography)`
  color: #949494;
  margin: 5px 0;
  span {
    font-weight: 800;
    color: #eee;
  }
`;

export const RecipeDescription = styled(Typography)`
  margin: 15px 0;
  overflow: hidden;
  textoverflow: ellipsis;
  display: -webkit-box;
`;

export const RecipeReadMore = styled(Typography)`
  font-size: 24px;
  border-bottom: 1px solid var(--white);

  span {
    -webkit-text-stroke: 1.5px #fff;
    -webkit-text-fill-color: #2a2a2a;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  :hover {
    border-bottom: 1px solid #fbc41b;
    span {
      -webkit-text-stroke: 1.5px #fbc41b;
      -webkit-text-fill-color: #2a2a2a;
    }
  }
`;

export const RecipeIngredients = styled(Grid)`
  padding: 40px 30px;
  background: #fbc41b;
  color: #2a2a2a;
`;

export const IngredientsListHeading = styled(Typography)`
  margin-bottom: 6px;
`;

export const RecipeIngredientsList = styled(Typography)`
  margin: 0;
  padding: 0;

  li {
    line-height: 26px;
    font-size: 16px;
  }
`;
