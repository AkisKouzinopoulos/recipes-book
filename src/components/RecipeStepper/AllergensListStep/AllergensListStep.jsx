import React, { useState, useContext } from 'react';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';

const allergensCheckboxes = [
  'Celery',
  'Cereals containing gluten',
  'Crustaceans',
  'Eggs',
  'Fish',
  'Lupin',
  'Milk',
  'Molluscs',
  'Mustard',
  'Nuts',
  'Peanuts',
  'Sesame seeds',
  'Sulphur dioxide',
  'Soya',
];

const AllergensListStep = () => {
  const [allergens, setAllergens] = useState([]);

  const { dispatch } = useContext(RecipesContext);

  const handleAllergenChange = e => {
    const newAllergens = [...allergens];
    const allergenIndex = newAllergens.findIndex(item => item.name === e.target.name);

    if (allergenIndex === -1) {
      newAllergens.push({ name: e.target.name, checked: true });
    } else {
      newAllergens.splice(allergenIndex, 1);
    }

    setAllergens(newAllergens);
  };

  const onBlurHandle = () => {
    dispatch({
      type: 'UPDATE_NEW_RECIPE',
      payload: {
        allergens,
      },
    });
  };

  return (
    <FormGroup>
      <Typography variant="h3" my={1}>
        Allergens
      </Typography>
      <Stack direction="row" flexWrap="wrap">
        {allergensCheckboxes.map((item, index) => (
          <FormControlLabel
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            control={
              <Checkbox
                name={item}
                value={item}
                checked={allergens.item}
                onChange={e => handleAllergenChange(e)}
                onBlur={onBlurHandle}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={item}
          />
        ))}
      </Stack>
    </FormGroup>
  );
};

export default AllergensListStep;
