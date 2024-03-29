const testReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;