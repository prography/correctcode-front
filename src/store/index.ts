import { combineReducers } from 'redux';
import AuthReducer, { AuthState } from 'store/auth';
import RepoReducer, { RepoState } from 'store/repo';
import ReviewReducer, { ReviewState } from 'store/review';

export type RootState = {
  auth: AuthState;
  repo: RepoState;
  review: ReviewState;
};

export default combineReducers({
  auth: AuthReducer,
  repo: RepoReducer,
  review: ReviewReducer,
});
