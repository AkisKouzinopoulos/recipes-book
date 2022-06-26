/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from 'react';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';
import RecipeIngredientsStepForm from '../../StepsForms/RecipeIngredientsStepForm/RecipeIngredientsStepForm';

const EditRecipeIngredientsStep = () => {
  const initialIngredients = [{ ingredient: '', quantity: '', unit: '' }];
  const [ingredients, setIngredients] = useState(initialIngredients);

  const { newRecipe, dispatch } = useContext(RecipesContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    setIngredients(newRecipe?.ingredients);
  }, [dispatch, newRecipe?.ingredients]);

  const handleChange = (i, e) => {
    const { name, value } = e.target;
    const newIngredients = [...ingredients];
    newIngredients[i][name] = value;
    setIngredients(newIngredients);
    dispatch({
      type: 'UPDATE_NEW_RECIPE',
      payload: {
        ingredients: newIngredients,
      },
    });
  };

  const addFormFields = () => {
    setIngredients([...ingredients, { ingredient: '', quantity: '', unit: '' }]);
  };

  const removeFormFields = i => {
    const newIngredients = [...ingredients];
    newIngredients.splice(i, 1);
    setIngredients(newIngredients);
    dispatch({
      type: 'UPDATE_NEW_RECIPE',
      payload: {
        ingredients: newIngredients,
      },
    });
  };

  return (
    <RecipeIngredientsStepForm
      ingredients={ingredients}
      handleChange={handleChange}
      addFormFields={addFormFields}
      removeFormFields={removeFormFields}
    />
  );
};

export default EditRecipeIngredientsStep;
