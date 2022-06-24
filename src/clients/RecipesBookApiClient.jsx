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
  getRecipeDetails: async id => {
    const { data } = await axios.get(`/recipes`, {
      headers: HEADERS,
    });

    const [filteredData] = data.filter(recipe => recipe.id === id);

    return filteredData;
  },
  addRecipe: async recipe => {
    const { data } = await axios.post(`/recipes`, recipe, {
      method: 'POST',
      headers: HEADERS,
    });

    return data;
  },
  editRecipe: async recipe => {
    const { data } = await axios.put(`/recipes/${recipe.id}`, recipe, {
      method: 'POST',
      headers: HEADERS,
    });

    return data;
  },
  deleteRecipe: async id => {
    const { data } = await axios.delete(`/recipes/${id}`, {
      method: 'DELETE',
      headers: HEADERS,
    });
    return data;
  },
  login: async formData => {
    const { data } = await axios.post(`/login`, formData, {
      method: 'POST',
      headers: HEADERS,
    });

    localStorage.setItem('username', data.user.username);
    return data;
  },
  signup: async formData => {
    const { data } = await axios.post(`/users`, formData, {
      method: 'POST',
      headers: HEADERS,
    });
    localStorage.setItem('username', data.user.username);
    console.log(data);
  },

  // getRecipeDetails: async (id) => {
  //   const { data } = await axios.get(`/recipes/${id}`, {
  //     headers: HEADERS,
  //   });

  //   return data;
  // },
};

export default RecipesBookApiClient;
