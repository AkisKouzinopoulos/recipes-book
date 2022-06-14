import React, { createContext, useReducer, useMemo } from 'react';
import { SearchReducer } from './SearchReducer';

//  initial state
const initialState = {
  search: '',
};

//  Create context
export const SearchContext = createContext(initialState);

//  Provider component
export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  //  Actions
  const updateSearchQuery = queryText => {
    dispatch({
      type: 'UPDATE_QUERY',
      payload: queryText,
    });
  };

  const search = useMemo(
    () => ({
      search: state.search,
      updateSearchQuery,
    }),
    [state.search]
  );

  return <SearchContext.Provider value={search}>{children}</SearchContext.Provider>;
};
