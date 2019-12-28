import { call, put } from 'redux-saga/effects';

export const fetchEntity = ({
  request,
  success,
  failure,
  service,
}: EntitySchema) => {
  return function*(...args: any[]) {
    yield put(request());
    try {
      const response = yield call(service, ...args);
      yield put(success(response));
    } catch (err) {
      // TODO: error reducer 따로 만들기.
      yield put(failure());
    }
  };
};
