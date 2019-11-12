import { reviewList } from 'store/review/api'
import { createEntity } from 'utils/redux';

export enum ReviewListAction {
  saga = 'REVIEW_LIST_SAGA',
  request = 'REVIEW_LIST_REQUEST',
  success = 'REVIEW_LIST_SUCCESS',
  failure = 'REVIEW_LIST_FAILURE',
}

export const reviewListEntity = createEntity(ReviewListAction, reviewList);
export const reviewListSaga = () => ({ type: ReviewListAction.saga })
export type reviewListSaga = ReturnType<typeof reviewListSaga>;

type ReviewAction = 
  | EntityActions<typeof reviewListEntity>;

export default ReviewAction;