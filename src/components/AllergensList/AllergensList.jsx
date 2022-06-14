import React from 'react';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

export const AllergenImg = styled('div')`
  background: ${({ url }) => `url(${url})`};
  background-size: 140%;
  background-repeat: no-repeat;
  width: 45px;
  height: 45px;
  margin-right: 3px;
  border-radius: 100px;
  background-color: white;
  background-position: -9px -1px;
`;

const AllergensList = ({ allergens }) => (
  <Stack direction="row" flexWrap="wrap" my={2}>
    {allergens?.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={index}>
        <AllergenImg url={`../../assets/${item.name}.png`} />
      </div>
    ))}
  </Stack>
);

export default AllergensList;
