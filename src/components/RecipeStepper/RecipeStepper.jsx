import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import RecipeOverviewStep from './RecipeOverviewStep/RecipeOverviewStep';
import RecipeIngredientsStep from './RecipeIngredientsStep/RecipeIngredientsStep';
import RecipeImplementationStep from './RecipeImplementationStep/RecipeImplementationStep';
import AllergensListStep from './AllergensListStep/AllergensListStep';

export const AccordionSx = {
  margin: '15px 0',
  '&:before': {
    backgroundColor: 'transparent',
  },
};

const RecipeStepper = () => (
  <div>
    <Accordion square sx={AccordionSx} elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Recipe overview</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <RecipeOverviewStep />
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
        <RecipeIngredientsStep />
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
        <RecipeImplementationStep />
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
        <AllergensListStep />
      </AccordionDetails>
    </Accordion>
  </div>
);

export default RecipeStepper;
