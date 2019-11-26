import { all, fork } from 'redux-saga/effects';
import authSaga from './auth';
import repoSaga from './repo';
import reviewSaga from './review';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(repoSaga), fork(reviewSaga)]);
}
