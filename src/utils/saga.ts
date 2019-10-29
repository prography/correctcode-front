import { call, put } from 'redux-saga/effects';

export const fetchEntity = ({ action, service }: EntitySchema) => {
  return function*(...args: any[]) {
    yield put(action.request());
    try {
      const response = yield call(service, ...args);
      yield put(action.success(response));
    } catch (err) {
      // TODO: error reducer 따로 만들기.
      yield put(action.failure());
    }
  };
};
