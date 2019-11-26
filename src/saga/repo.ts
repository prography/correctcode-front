import { all, fork, takeLatest } from 'redux-saga/effects';
import { getReposEntity, GetReposActions } from 'store/repo/action';
import { fetchEntity } from 'utils/saga';

const fetchGetRepos = fetchEntity(getReposEntity);

function* watchGetRepos() {
  yield takeLatest(GetReposActions.saga, fetchGetRepos);
}

export default function* root() {
  yield all([fork(watchGetRepos)]);
}
