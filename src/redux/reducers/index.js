import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import InputUser from './UserReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  inputUser: InputUser,
});

export {rootReducer};
