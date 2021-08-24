const searchReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BY_NAME':
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;