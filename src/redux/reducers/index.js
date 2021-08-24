import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  data: postReducer,
  search: searchReducer,
});

export default rootReducer;