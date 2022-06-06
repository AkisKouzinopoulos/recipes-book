import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const RecipesBookApiClient = {
  getRecipes: async () => {
    const { data } = await axios.get('/api/recipes', {
      headers: HEADERS,
    });

    return data;
  },
  getRecipeDetails: async (account) => {
    const { data } = await axios.get(`/api/recipes/${account}`, {
      headers: HEADERS,
    });

    return data;
  },
};

export default RecipesBookApiClient;
