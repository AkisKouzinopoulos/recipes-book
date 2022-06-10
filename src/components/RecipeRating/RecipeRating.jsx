import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import { RecipesContext } from '../../context/Recipes/RecipesContext';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const RecipeRating = ({ readonly, ratingValue, size }) => {
  const [value, setValue] = useState(0);

  const { dispatch } = useContext(RecipesContext);

  const onBlurHandle = () => {
    dispatch({
      type: 'UPDATE_NEW_RECIPE',
      payload: { rating: value },
    });
  };

  return (
    <Box
      sx={{
        '& > legend': { mt: 0.5 },
      }}
    >
      <Typography component="legend">{!readonly && 'Rate:'}</Typography>
      <StyledRating
        size={size}
        readOnly={readonly}
        name="customized-color"
        value={ratingValue || value}
        getLabelText={() => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onBlur={onBlurHandle}
      />
    </Box>
  );
};

export default RecipeRating;
