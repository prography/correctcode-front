import { take } from 'redux-saga/effects';
import { SAY_HI } from 'store';

export default function* rootSaga() {
  while (true) {
    yield take(SAY_HI);
  }
}
