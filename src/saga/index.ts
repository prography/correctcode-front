import { all, fork } from 'redux-saga/effects';
import authSaga from './auth';
import reviewSaga from './review';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(reviewSaga)]);
}
