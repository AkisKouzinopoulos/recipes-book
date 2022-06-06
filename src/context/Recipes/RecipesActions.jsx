import RecipesBookApiClient from '../../clients/RecipesBookApiClient';

export const fetchRecipes = async () => {
  const storesData = await RecipesBookApiClient.getRecipes()
    .then(response => response)
    .catch(() => {
      // setError(true);
    });

  return storesData;
};

export const fetchRecipeDetails = async (account) => {
  const recipeDetailsData = await RecipesBookApiClient.getRecipeDetails(account)
    .then(response => response)
    .catch(() => {
      // setError(true);
    });

  return recipeDetailsData;
};
