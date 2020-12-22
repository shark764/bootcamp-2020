import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import mainReducer from './mainReducer';

const reducers = combineReducers({
  main: mainReducer,
  example: exampleReducer,
  // auth: authReducer,
  // session: sessionReducer
});

export default reducers;
