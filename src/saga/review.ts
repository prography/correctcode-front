import {
  all,
  fork,
  take,
  select,
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';
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
import { showToast } from 'store/toast/action';
import { ToastType } from 'models/toast';

const fetchReviews = fetchEntity(getReviewsEntity);
const fetchUserReviews = fetchEntity(getUserReviewsEntity);
const createReview = fetchEntity(createReviewEntity);

function* watchCreateReviewError() {
  while (true) {
    yield take(createReviewEntity.failure.type);
    yield put(
      showToast({
        type: ToastType.Error,
        message: '리뷰 생성에 실패하였습니다.\n 다시 시도해주세요.',
        timeout: 3000,
      }),
    );
  }
}
function* watchCreateReview() {
  yield fork(watchCreateReviewError);
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
