import React, { useState } from 'react';

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

const DynamicStepper = () => {

  const [steps, setSteps] = useState([{ title: null, value: null }]);
  const [activeStep, setActiveStep] = useState();

  const addStep = () => {
    const newSteps = steps;
    newSteps.push({ title: null, value: null });
    setSteps(newSteps);
    setActiveStep(newSteps.length - 1);
  }

  const removeStep = (ind) => {
    if (steps.length < ind + 1) { return; }
    setSteps(steps.filter((item, i) => i !== ind));
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
                  defaultValue={`description step: ${index + 1}`}
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