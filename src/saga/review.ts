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
  createReviewByPrEntity,
  CreateReviewByPr,
  CREATE_REVIEW_BY_PR,
} from 'store/review/action';
import history from 'utils/history';
import { fetchEntity } from 'utils/saga';
import { showToast } from 'store/toast/action';
import { ToastType } from 'models/toast';

const fetchReviews = fetchEntity(getReviewsEntity);
const fetchUserReviews = fetchEntity(getUserReviewsEntity);
const createReview = fetchEntity(createReviewEntity);
const createReviewByPr = fetchEntity(createReviewByPrEntity);

function* watchCreateReviewSuccess() {
  while (true) {
    yield take([
      createReviewEntity.success.type,
      createReviewByPrEntity.success.type,
    ]);
    yield put(
      showToast({
        type: ToastType.Success,
        message: '리뷰 생성이 완료되었습니다.',
        timeout: 3000,
      }),
    );
    history.push('/reviewee');
  }
}

function* watchCreateReviewError() {
  while (true) {
    yield take([
      createReviewEntity.failure.type,
      createReviewByPrEntity.failure.type,
    ]);
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
  while (true) {
    const { reviewId, review }: CreateReview = yield take(CREATE_REVIEW);
    yield call(createReview, reviewId, review);
  }
}
function* watchCreateReviewByPr() {
  while (true) {
    const { repoId, prId, review }: CreateReviewByPr = yield take(
      CREATE_REVIEW_BY_PR,
    );
    yield call(createReviewByPr, repoId, prId, review);
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
    fork(watchCreateReviewByPr),
    fork(watchCreateReviewSuccess),
    fork(watchCreateReviewError),
  ]);
}
