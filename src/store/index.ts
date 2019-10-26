import { combineReducers } from 'redux';
import AuthReducer, { AuthState } from 'store/auth';

export type RootState = {
  auth: AuthState;
};

export default combineReducers({
  auth: AuthReducer,
});
