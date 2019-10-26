import { call, put } from 'redux-saga/effects';
import { EntityTypes } from './redux';

type EntitySchema = {
  action: EntityTypes<any, any, any>;
  service: (...args: any[]) => any;
};

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
