import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import testReducer from './testReducer';

const rootReducer = combineReducers({
  data: testReducer,
  search: searchReducer,
});

export default rootReducer;