import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const RecipesBookApiClient = {
  getRecipes: async () => {
    const { data } = await axios.get('/recipes', {
      headers: HEADERS,
    });

    return data;
  },
  getRecipeDetails: async (id) => {
    const { data } = await axios.get(`/recipes`, {
      headers: HEADERS,
    });

    const [filteredData] = data.filter(recipe => recipe.id === id);

    return filteredData;
  },
  addRecipe: async (recipe) => {
    const { data } = await axios.post(`/recipes`, recipe, {
      method: 'POST',
      headers: HEADERS,
    });

    return data;
  },
  // getRecipeDetails: async (id) => {
  //   const { data } = await axios.get(`/recipes/${id}`, {
  //     headers: HEADERS,
  //   });

  //   return data;
  // },
};

export default RecipesBookApiClient;
