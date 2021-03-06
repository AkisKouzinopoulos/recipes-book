import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditRecipeOverviewStep from './EditRecipeOverviewStep/EditRecipeOverviewStep';
import EditRecipeIngredientsStep from './EditRecipeIngredientsStep/EditRecipeIngredientsStep';
import EditRecipeImplementationStep from './EditRecipeImplementationStep/EditRecipeImplementationStep';
import EditAllergensListStep from './EditAllergensListStep/EditAllergensListStep';

export const AccordionSx = {
  margin: '15px 0',
  '&:before': {
    backgroundColor: 'transparent',
  },
};

const EditRecipeStepper = () => (
  <div>
    <Typography variant="h2">EDIT PAGE</Typography>
    <Accordion square sx={AccordionSx} elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Recipe overview</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <EditRecipeOverviewStep />
      </AccordionDetails>
    </Accordion>
    <Accordion square sx={AccordionSx} elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Add ingredients</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <EditRecipeIngredientsStep />
      </AccordionDetails>
    </Accordion>
    <Accordion square sx={AccordionSx} elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Add recipe steps</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <EditRecipeImplementationStep />
      </AccordionDetails>
    </Accordion>
    <Accordion square sx={AccordionSx} elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Add allergens</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <EditAllergensListStep />
      </AccordionDetails>
    </Accordion>
  </div>
);

export default EditRecipeStepper;
