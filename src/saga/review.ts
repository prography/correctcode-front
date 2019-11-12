import { all, fork, take, call } from 'redux-saga/effects';
import {
  ReviewListAction,
  reviewListEntity,  
} from 'store/review/action';
import { fetchEntity } from 'utils/saga';

const fetchReviewList = fetchEntity(reviewListEntity);


function* watchReview() {
  while (true) {
    yield take([ReviewListAction.saga]);
    yield call(fetchReviewList);
  }
}

export default function* reviewSaga() {
  yield all([fork(watchReview)]);
}
