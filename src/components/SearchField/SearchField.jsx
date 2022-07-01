import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchField.styles';

const SearchField = ({ searchRecipe, value }) => (
  <Search>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      onChange={searchRecipe}
      placeholder="Search"
      inputProps={{ 'aria-label': 'search', 'data-testid': 'searchField' }}
      value={value}
    />
  </Search>
);

export default SearchField;
