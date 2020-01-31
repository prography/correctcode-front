import { combineReducers } from 'redux';
import AuthReducer, { AuthState } from 'store/auth';
import DeviceReducer, { DeviceState } from 'store/device';
import RepoReducer, { RepoState } from 'store/repo';
import ReviewReducer, { ReviewState } from 'store/review';
import ToastReducer, { ToastState } from 'store/toast';

export type RootState = {
  auth: AuthState;
  device: DeviceState;
  repo: RepoState;
  review: ReviewState;
  toast: ToastState;
};

export default combineReducers({
  auth: AuthReducer,
  device: DeviceReducer,
  repo: RepoReducer,
  review: ReviewReducer,
  toast: ToastReducer,
});
