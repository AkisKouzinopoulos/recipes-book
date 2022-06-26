/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';
import { fetchRecipeDetails } from '../../../context/Recipes/RecipesActions';
import RecipeOverviewStepForm from '../../RecipeStepper/RecipeOverviewStep/RecipeOverviewStepForm/RecipeOverviewStepForm';

const EditRecipeOverviewStep = () => {
  const { id } = useParams();
  const initialOverview = {
    title: '',
    description: '',
    difficulty: '',
    preparationTime: '',
    imgUrl: '',
  };
  const [overview, setOverview] = useState(initialOverview);
  const { isLoading, dispatch } = useContext(RecipesContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getRecipeDetails = async () => {
      const recipeDetailsData = await fetchRecipeDetails(id);
      dispatch({ type: 'GET_RECIPE_DETAILS', payload: recipeDetailsData });
      setOverview({
        title: recipeDetailsData?.title,
        description: recipeDetailsData?.description,
        difficulty: recipeDetailsData?.difficulty,
        preparationTime: recipeDetailsData?.preparationTime,
        imgUrl: recipeDetailsData?.imgUrl,
      });
      dispatch({ type: 'UPDATE_NEW_RECIPE', payload: recipeDetailsData }); //  Fill the temp newRecipe with the recipe's data
    };
    getRecipeDetails();
  }, [dispatch, id]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    const newOverview = { ...overview };
    newOverview[name] = value;
    const { title, description, difficulty, preparationTime, imgUrl } = newOverview;

    setOverview({
      ...newOverview,
      [name]: value,
    });
    dispatch({
      type: 'UPDATE_NEW_RECIPE',
      payload: {
        id,
        title,
        description,
        difficulty,
        preparationTime,
        imgUrl,
      },
    });
  };

  return <RecipeOverviewStepForm handleInputChange={handleInputChange} overview={overview} />;
};

export default EditRecipeOverviewStep;
