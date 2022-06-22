/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';

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
    <>
      {ingredients.map((element, index) => (
        <Grid
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          container
          item
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ marginBottom: '15px' }}
        >
          <Grid item xs={4}>
            <TextField
              id="ingredient-input"
              label="Ingredient"
              name="ingredient"
              value={element.ingredient || ''}
              onChange={e => handleChange(index, e)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="quantity-input"
              label="Quantity"
              name="quantity"
              value={element.quantity || ''}
              onChange={e => handleChange(index, e)}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Unit</InputLabel>
              <Select
                labelId="unit-input-select-label"
                id="unit-input"
                name="unit"
                value={element.unit || ''}
                label="Unit"
                onChange={e => handleChange(index, e)}
              >
                <MenuItem value="k">kilos</MenuItem>
                <MenuItem value="lt">litters</MenuItem>
                <MenuItem value="gr">gr</MenuItem>
                <MenuItem value="mls">mls</MenuItem>
                <MenuItem value="oz">oz</MenuItem>
                <MenuItem value="tsp">tsp</MenuItem>
                <MenuItem value="Tbsp">Tbsp</MenuItem>
                <MenuItem value="cups">cups</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <div>
              {index ? (
                <IconButton
                  aria-label="delete"
                  size="medium"
                  onClick={() => removeFormFields(index)}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              ) : null}
            </div>
          </Grid>
        </Grid>
      ))}
      <Button variant="outlined" onClick={() => addFormFields()}>
        Add ingredient
      </Button>
    </>
  );
};

export default RecipeOverviewStep;
