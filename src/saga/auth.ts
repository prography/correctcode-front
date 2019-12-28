import { all, fork, take, call } from 'redux-saga/effects';
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
  while (true) {
    const { token } = yield take(MeAction.saga);
    yield call(fetchMe, token);
  }
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
