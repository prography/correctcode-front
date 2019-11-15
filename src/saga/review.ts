import { all, fork, takeLatest } from 'redux-saga/effects';
import {
  GetReviewsActions,
  getReviewsEntity,  
} from 'store/review/action';
import { fetchEntity } from 'utils/saga';

const fetchReviewList = fetchEntity(getReviewsEntity);


function* watchReview() {  
  yield takeLatest(GetReviewsActions.saga, fetchReviewList);    
}

export default function* root() {
  yield all([fork(watchReview)]);
}
