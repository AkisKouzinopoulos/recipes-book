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
  getRecipeDetails: async (id) => {
    const { data } = await axios.get(`/api/recipes/${id}`, {
      headers: HEADERS,
    });

    return data;
  },
};

export default RecipesBookApiClient;
