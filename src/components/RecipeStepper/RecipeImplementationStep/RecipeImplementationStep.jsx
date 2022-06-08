/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';

const RecipeImplementationStep = () => {
  const [steps, setSteps] = useState([""])

  const { dispatch } = useContext(RecipesContext);

  const handleChange = (i, e) => {
    const newSteps = [...steps];
    newSteps[i] = e.target.value;
    setSteps(newSteps);
  }

  const onBlurHandle = () => {
    dispatch({
      type: 'UPDATE_NEW_RECIPE', payload: { steps }
    });
  }

  const addFormFields = () => {
    setSteps([...steps, ""])
  }

  const removeFormFields = (i) => {
    const newSteps = [...steps];
    newSteps.splice(i, 1);
    setSteps(newSteps)
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      {steps.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="form-inline" key={index}>
          <TextField
            fullWidth
            id="step-input"
            label="Step"
            name="step"
            value={element || ""}
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
      <Button variant="outlined" onClick={() => addFormFields()}>Add step</Button>
    </Box>
  )
};

export default RecipeImplementationStep;
