import React, { useState, useContext } from 'react';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { RecipesContext } from '../../../context/Recipes/RecipesContext';

const allergensCheckboxes = [
  { name: 'Celery', checked: false },
  { name: 'Gluten', checked: false },
  { name: 'Crustaceans', checked: false },
  { name: 'Eggs', checked: false },
  { name: 'Fish', checked: false },
  { name: 'Lupin', checked: false },
  { name: 'Milk', checked: false },
  { name: 'Moluscs', checked: false },
  { name: 'Mustard', checked: false },
  { name: 'Nuts', checked: false },
  { name: 'Peanuts', checked: false },
  { name: 'Sesame', checked: false },
  { name: 'Sulphites', checked: false },
  { name: 'Soya', checked: false },
];

const AllergensListStep = () => {
  const [allergens, setAllergens] = useState(allergensCheckboxes);

  const { dispatch } = useContext(RecipesContext);

  const handleAllergenChange = e => {
    const newAllergens = [...allergens];
    const allergenToChange = newAllergens.find(item => item.name === e.target.name);
    allergenToChange.checked = !allergenToChange.checked;

    setAllergens(newAllergens);

    dispatch({
      type: 'UPDATE_NEW_RECIPE',
      payload: {
        allergens: newAllergens,
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
                name={item.name}
                value={item.name}
                checked={allergens.item?.name}
                onChange={handleAllergenChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={item.name}
          />
        ))}
      </Stack>
    </FormGroup>
  );
};

export default AllergensListStep;
