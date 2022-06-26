/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';
import RecipeIngredientsStepForm from '../../StepsForms/RecipeIngredientsStepForm/RecipeIngredientsStepForm';

const RecipeOverviewStep = () => {
  const initialIngredients = [{ ingredient: '', quantity: '', unit: '' }];
  const [ingredients, setIngredients] = useState(initialIngredients);

  const { dispatch } = useContext(RecipesContext);

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

export default RecipeOverviewStep;
