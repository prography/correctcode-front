import { all, fork, take, select, call } from 'redux-saga/effects';
import { GetReviewsActions, getReviewsEntity } from 'store/review/action';
import { fetchEntity } from 'utils/saga';

const fetchReviewList = fetchEntity(getReviewsEntity);

function* watchReview() {
  while (true) {
    const { reviewType } = yield take(GetReviewsActions.saga);
    const { user } = yield select((state: StoreState) => state.auth);
    yield call(fetchReviewList, user.id, reviewType);
  }
}

export default function* root() {
  yield all([fork(watchReview)]);
}
