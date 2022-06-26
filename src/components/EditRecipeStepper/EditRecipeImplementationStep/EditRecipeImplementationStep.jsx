/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from 'react';
import RecipeImplementationStepForm from '../../StepsForms/RecipeImplementationStepForm/RecipeImplementationStepForm';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';

const EditRecipeImplementationStep = () => {
  const [steps, setSteps] = useState(['']);

  const { newRecipe, dispatch } = useContext(RecipesContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    setSteps(newRecipe?.steps);
  }, [dispatch, newRecipe?.steps]);

  const handleChange = (i, e) => {
    const { value } = e.target;
    const newSteps = [...steps];
    newSteps[i] = value;
    setSteps(newSteps);
    dispatch({
      type: 'UPDATE_NEW_RECIPE',
      payload: {
        steps: newSteps,
        totalSteps: steps.length,
      },
    });
  };

  const addFormFields = () => {
    setSteps([...steps, '']);
  };

  const removeFormFields = i => {
    const newSteps = [...steps];
    newSteps.splice(i, 1);
    setSteps(newSteps);
    dispatch({
      type: 'UPDATE_NEW_RECIPE',
      payload: {
        steps: newSteps,
        totalSteps: steps.length,
      },
    });
  };

  return (
    <RecipeImplementationStepForm
      steps={steps}
      handleChange={handleChange}
      addFormFields={addFormFields}
      removeFormFields={removeFormFields}
    />
  );
};

export default EditRecipeImplementationStep;
