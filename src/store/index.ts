import { combineReducers } from 'redux';
import AuthReducer, { AuthState } from 'store/auth';
import RepoReducer, { RepoState } from 'store/repo';
import ReviewReducer, { ReviewState } from 'store/review';
import ToastReducer, { ToastState } from 'store/toast';

export type RootState = {
  auth: AuthState;
  repo: RepoState;
  review: ReviewState;
  toast: ToastState;
};

export default combineReducers({
  auth: AuthReducer,
  repo: RepoReducer,
  review: ReviewReducer,
  toast: ToastReducer,
});
