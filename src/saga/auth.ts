import { all, fork, take, call } from 'redux-saga/effects';
import { LoginAction, loginEntity, LoginSaga } from 'store/auth/action';
import { fetchEntity } from 'utils/saga';

const fetchLogin = fetchEntity(loginEntity);

function* watchAuth() {
  while (true) {
    const { username }: LoginSaga = yield take([LoginAction.saga]);
    yield call(fetchLogin, { username });
  }
}

export default function* authSaga() {
  yield all([fork(watchAuth)]);
}
