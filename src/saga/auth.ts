import { all, fork, take, call, takeLatest } from 'redux-saga/effects';
import {
  LoginAction,
  loginEntity,
  meEntity,
  MeAction,
} from 'store/auth/action';
import { fetchEntity } from 'utils/saga';

const fetchLogin = fetchEntity(loginEntity);
const fetchMe = fetchEntity(meEntity);

function* watchMeSaga() {
  yield takeLatest(MeAction.saga, fetchMe);
}

function* watchAuth() {
  while (true) {
    yield take([LoginAction.saga]);
    yield call(fetchLogin);
  }
}

export default function* authSaga() {
  yield all([fork(watchAuth), fork(watchMeSaga)]);
}
