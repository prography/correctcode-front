import { all, fork, take, call } from 'redux-saga/effects';
import { loginEntity, meEntity, ME, LOGIN } from 'store/auth/action';
import { fetchEntity } from 'utils/saga';

const fetchLogin = fetchEntity(loginEntity);
const fetchMe = fetchEntity(meEntity);

function* watchMeSaga() {
  while (true) {
    const { token } = yield take(ME);
    yield call(fetchMe, token);
  }
}

function* watchAuth() {
  while (true) {
    yield take([LOGIN]);
    yield call(fetchLogin);
  }
}

export default function* authSaga() {
  yield all([fork(watchAuth), fork(watchMeSaga)]);
}
