import { all, fork, take, select, call, takeLatest } from 'redux-saga/effects';
import {
  getUserReviewsEntity,
  getReviewsEntity,
  createReviewEntity,
  CreateReview,
  GetUserReviews,
  CREATE_REVIEW,
  GET_REVIEWS,
  GET_USER_REVIEWS,
} from 'store/review/action';
import { fetchEntity } from 'utils/saga';

const fetchReviews = fetchEntity(getReviewsEntity);
const fetchUserReviews = fetchEntity(getUserReviewsEntity);
const createReview = fetchEntity(createReviewEntity);

function* watchCreateReview() {
  while (true) {
    const { reviewId, review }: CreateReview = yield take(CREATE_REVIEW);
    yield call(createReview, reviewId, review);
  }
}

function* watchReviews() {
  yield takeLatest(GET_REVIEWS, fetchReviews);
}

function* watchUserReview() {
  while (true) {
    const { userType }: GetUserReviews = yield take(GET_USER_REVIEWS);
    const { user } = yield select((state: StoreState) => state.auth);
    yield call(fetchUserReviews, user.id, userType);
  }
}

export default function* root() {
  yield all([
    fork(watchReviews),
    fork(watchUserReview),
    fork(watchCreateReview),
  ]);
}
