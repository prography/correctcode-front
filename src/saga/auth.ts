import { all, fork, take, call, select } from 'redux-saga/effects';
import { LoginAction, loginEntity, meEntity } from 'store/auth/action';
import { fetchEntity } from 'utils/saga';

const fetchLogin = fetchEntity(loginEntity);
const fetchMe = fetchEntity(meEntity);

function* watchAuth() {
  while (true) {
    yield take([LoginAction.saga]);
    yield call(fetchLogin);
  }
}

export default function* authSaga() {
  yield call(fetchMe);
  yield all([fork(watchAuth)]);
}
