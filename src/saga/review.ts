import { all, fork, take, select, call, takeLatest } from 'redux-saga/effects';
import {
  GetUserReviewsActions,
  getUserReviewsEntity,
  getReviewsEntity,
  GetReviewsActions,
} from 'store/review/action';
import { fetchEntity } from 'utils/saga';

const fetchReviews = fetchEntity(getReviewsEntity);
const fetchUserReviews = fetchEntity(getUserReviewsEntity);

function* watchReviews() {
  yield takeLatest(GetReviewsActions.saga, fetchReviews);
}

function* watchUserReview() {
  while (true) {
    const { userType } = yield take(GetUserReviewsActions.saga);
    const { user } = yield select((state: StoreState) => state.auth);
    yield call(fetchUserReviews, user.id, userType);
  }
}

export default function* root() {
  yield all([fork(watchReviews), fork(watchUserReview)]);
}
