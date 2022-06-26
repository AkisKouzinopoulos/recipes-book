/* eslint-disable react/no-array-index-key */
import React, { useState, useContext } from 'react';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';
import RecipeOverviewStepForm from '../../StepsForms/RecipeOverviewStepForm/RecipeOverviewStepForm';

const RecipeOverviewStep = () => {
  const initialOverview = {
    title: '',
    description: '',
    difficulty: '',
    preparationTime: '',
    imgUrl: '',
  };
  const [overview, setOverview] = useState(initialOverview);

  const { dispatch } = useContext(RecipesContext);

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

export default RecipeOverviewStep;
