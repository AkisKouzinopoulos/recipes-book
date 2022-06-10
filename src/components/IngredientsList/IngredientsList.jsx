import React from 'react';
import { RecipeIngredientsList, IngredientsListHeading } from '../RecipesList/RecipesListItem/RecipesListItem.styles';

const IngredientsList = ({ ingredients }) => (
  <>
    <IngredientsListHeading variant="h3">INGREDIENTS</IngredientsListHeading>
    <RecipeIngredientsList varian="body2">
      {/* eslint-disable-next-line react/no-array-index-key */}
      {ingredients?.map((item, index) => <li key={index}>{item.quantity} {item.unit} {item.ingredient}</li>)}
    </RecipeIngredientsList>
  </>
);

export default IngredientsList;
