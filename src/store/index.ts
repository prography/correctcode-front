import { combineReducers } from 'redux';
import AuthReducer, { AuthState } from 'store/auth';
import ReviewReducer, { ReviewState } from 'store/review';

export type RootState = {
  auth: AuthState;
  review: ReviewState;
};

export default combineReducers({
  auth: AuthReducer,
  review: ReviewReducer,
});
