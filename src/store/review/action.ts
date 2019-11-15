import { reviewList } from 'store/review/api'
import { createEntity } from 'utils/redux';

export enum GetReviewsActions {
  saga = 'GET_REVIEWS_SAGA',
  request = 'GET_REVIEWS_REQUEST',
  success = 'GET_REVIEWS_SUCCESS',
  failure = 'GET_REVIEWS_FAILURE',
}

export const getReviewsEntity = createEntity(GetReviewsActions, reviewList);
export const getReviewsSaga = () => ({ type: GetReviewsActions.saga })
export type getReviewsSaga = ReturnType<typeof getReviewsSaga>;

type ReviewAction = EntityActions<typeof getReviewsEntity>;

export default ReviewAction;