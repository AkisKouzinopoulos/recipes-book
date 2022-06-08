/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';

const RecipeOverviewStep = () => {
  const [ingedients, setIngedients] = useState([{ ingredient: "", quantity: "" }])

  const { dispatch } = useContext(RecipesContext);

  const handleChange = (i, e) => {
    const newIngredients = [...ingedients];
    newIngredients[i][e.target.name] = e.target.value;
    setIngedients(newIngredients);
  }

  const onBlurHandle = () => {
    dispatch({
      type: 'UPDATE_NEW_RECIPE', payload: {
        ingedients
      }
    });
  }

  const addFormFields = () => {
    setIngedients([...ingedients, { ingredient: "", quantity: "" }])
  }

  const removeFormFields = (i) => {
    const newIngredients = [...ingedients];
    newIngredients.splice(i, 1);
    setIngedients(newIngredients)
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(JSON.stringify(ingedients));
  // }

  return (
    <Box
      // onSubmit={handleSubmit}
      component="form"
      noValidate
      autoComplete="off"
    >
      {ingedients.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="form-inline" key={index}>
          <TextField
            id="ingredient-input"
            label="Ingredient"
            name="ingredient"
            value={element.ingredient || ""}
            onChange={e => handleChange(index, e)}
            onBlur={onBlurHandle}
          />
          <TextField
            id="quantity-input"
            label="Quantity"
            name="quantity"
            value={element.quantity || ""}
            onChange={e => handleChange(index, e)}
            onBlur={onBlurHandle}
          />
          {
            index ?
              <IconButton aria-label="delete" size="small" onClick={() => removeFormFields(index)} >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
              : null
          }
        </div>
      ))}
      <Button variant="outlined" onClick={() => addFormFields()}>Add ingredient</Button>
      {/* <Button variant="contained">Submit</Button> */}
    </Box>
  )
};

export default RecipeOverviewStep;
