export const SearchReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
