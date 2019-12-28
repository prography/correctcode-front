import { all, fork, takeLatest } from 'redux-saga/effects';
import { getReposEntity, GET_REPOS } from 'store/repo/action';
import { fetchEntity } from 'utils/saga';

const fetchGetRepos = fetchEntity(getReposEntity);

function* watchGetRepos() {
  yield takeLatest(GET_REPOS, fetchGetRepos);
}

export default function* root() {
  yield all([fork(watchGetRepos)]);
}
