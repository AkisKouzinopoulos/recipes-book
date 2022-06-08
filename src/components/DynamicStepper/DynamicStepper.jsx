import React, { useContext, useState } from 'react';

// import { withStyles } from '@mui/material/styles';
import styled from '@emotion/styled';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepContent from '@mui/material/StepContent';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Add from '@mui/icons-material/AddCircle';
import Delete from '@mui/icons-material/Delete';

import { RecipesContext } from '../../context/Recipes/RecipesContext';

const DynamicStepper = () => {

  const [steps, setSteps] = useState([{ title: null, value: null }]);
  const [activeStep, setActiveStep] = useState();

  const { dispatch } = useContext(RecipesContext);

  const addStep = (n = 1) => {
    const newSteps = steps;
    // newSteps.push({ title: null, value: '' });
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < n; i++) {
      newSteps.push({ title: null, value: null });
    }
    setSteps(newSteps);
    setActiveStep(newSteps.length - 1);
    console.log('ss', steps);
    dispatch({ type: 'ADD_RECIPE_STEP', payload: { title: 'test title', value: 'value for test' } });
  }

  const removeStep = (ind) => {
    if (steps.length < ind + 1) { return; }
    setSteps(steps.filter((item, i) => i !== ind));
    // dispatch({ type: 'REMOVE_RECIPE_STEP', payload: steps })
  }

  const changeStepValue = (index, value) => {
    steps[index].value = value;
    // const option = stepOptions.find((item) => item.value === value);
    // steps[ind].title = option ? option.label : 'Undefined';
    setSteps(steps);
    setActiveStep(steps.length);
  }

  return (
    <div>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Step key={`step_${index}_container`} >
            <StepButton
              onClick={() => setActiveStep(activeStep === index ? steps.length : index)}
            >
              <div style={{ display: 'flex' }}>
                <Typography>{step.title || 'Choose an action'}</Typography>
                {activeStep === index &&
                  <Delete style={{ marginLeft: 5 }} onClick={() => removeStep(index)} />
                }
              </div>
            </StepButton>
            <StepContent>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <TextField
                  label="Step description"
                  id="outlined-size-small"
                  // defaultValue={`description step: ${index + 1}`}
                  value={steps[index].value}
                  onChange={(evt) => changeStepValue(index, evt.target.value)}
                  size="small"
                />
              </FormControl>
            </StepContent>
          </Step>
        ))}
        <Step>
          <StepButton
            icon={<Add />}
            onClick={() => addStep()}
            style={{ fontWeight: 'bold' }}
          >
            Add a Step
          </StepButton>
        </Step>
      </Stepper>
    </div>
  );

}

export default DynamicStepper;