import React from 'react'
import { Link } from 'react-router-dom';

const RecipesListItem = ({ recipe }) => (
  <Link to={`/recipes/${recipe.id}`}>
    <div>{recipe.title}</div>
  </Link>
)

export default RecipesListItem;
