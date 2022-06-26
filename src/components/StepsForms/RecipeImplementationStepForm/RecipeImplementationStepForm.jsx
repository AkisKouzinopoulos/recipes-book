import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const RecipeImplementationStepForm = ({ steps, handleChange, addFormFields, removeFormFields }) => (
  <>
    {steps?.map((element, index) => (
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

export default RecipeImplementationStepForm;
