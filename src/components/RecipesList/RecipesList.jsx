import React from 'react'
import RecipesListItem from './RecipesListItem/RecipesListItem';

const RecipesList = ({ recipes }) => (
  recipes.map(recipe => <RecipesListItem key={recipe.id} recipe={recipe} />)
)

export default RecipesList;
