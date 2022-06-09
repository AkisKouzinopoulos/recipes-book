import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const RecipeContainer = styled(Paper)`
  background: #FFF;
  border-radius: 0;
  max-height: 400px;
  a {
    text-decoration: none;
  }
`;

export const RecipeOverview = styled(Grid)`
  background: #2a2a2a;
  color: #FFF;
  padding: 40px 30px;
`;

export const RecipeImgContainer = styled(Grid)`
  img {
    height: 100%;
  }
`;

export const DifficultyLabel = styled(Typography)`
  color: #FFF;
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
    color: #EEE;
  }
`;

export const RecipeDescription = styled(Typography)`
  margin: 15px 0;
  overflow: hidden;
  textOverflow: ellipsis;
  display: -webkit-box;
`;

export const RecipeReadMore = styled(Typography)`
  font-size: 24px;

  span {
    -webkit-text-stroke: 1.5px #fff;
    -webkit-text-fill-color: #2a2a2a;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }
`;

export const RecipeIngredients = styled(Grid)`
  padding: 40px 30px;
  background: #FBC41B;
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
    font-size: 16px
  }
`;
