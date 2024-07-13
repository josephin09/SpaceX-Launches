import { combineReducers } from 'redux';
import authReducer from './authReducer';
import launchReducer from './launchReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  launches: launchReducer,
});

export default rootReducer;




