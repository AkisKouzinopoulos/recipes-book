import React from 'react'
import RecipesListItem from './RecipesListItem/RecipesList';

const RecipesList = ({ recipes }) => (
  recipes.map(recipe => <RecipesListItem key={recipe.id} />)
)

export default RecipesList;
