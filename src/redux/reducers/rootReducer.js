import {combineReducers} from 'redux';
import userReducer from './userReducer';
import utilReducer from './utilReducer';
import commonDataReducer from './commonDataReducer';

export default combineReducers({
  user: userReducer,
  util: utilReducer,
  common: commonDataReducer,
});
