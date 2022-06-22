/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';

const RecipeImplementationStep = () => {
  const [steps, setSteps] = useState(['']);

  const { dispatch } = useContext(RecipesContext);

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
    <>
      {steps.map((element, index) => (
        <Stack
          direction="row"
          spacing={2}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          alignItems="center"
          sx={{ margin: '15px 0' }}
        >
          <TextField
            fullWidth
            id="step-input"
            label={`Step ${index + 1}`}
            name="step"
            value={element || ''}
            onChange={e => handleChange(index, e)}
          />
          {index ? (
            <IconButton aria-label="delete" size="medium" onClick={() => removeFormFields(index)}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          ) : null}
        </Stack>
      ))}
      <Button variant="outlined" onClick={() => addFormFields()}>
        Add step
      </Button>
    </>
  );
};

export default RecipeImplementationStep;
