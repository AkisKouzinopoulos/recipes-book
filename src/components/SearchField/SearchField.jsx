import React from 'react';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const StyledTextField = styled(TextField)`
  background-color: var(--white);
  border-radius: 5px;
  &.MuiFormControl-root {
    border: none;
    & div {
      height: 30px;
      padding-left: 3px;
    }
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  fill: var(--black);
`;

const SearchField = ({ handleSearch }) => (
  <StyledTextField
    onChange={handleSearch}
    placeholder="Search"
    size="small"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <StyledSearchIcon />
        </InputAdornment>
      ),
    }}
  />
);

export default SearchField;
