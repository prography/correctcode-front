import { createReview, getReviewList } from 'api/review';
import { createEntity } from 'utils/redux';
import { ReviewType } from 'models/review';

export enum GetReviewsActions {
  saga = 'GET_REVIEWS_SAGA',
  request = 'GET_REVIEWS_REQUEST',
  success = 'GET_REVIEWS_SUCCESS',
  failure = 'GET_REVIEWS_FAILURE',
}

export enum CreateReviewActions {
  saga = 'CREATE_REVIEW_SAGA',
  request = 'CREATE_REVIEW_REQUEST',
  success = 'CREATE_REVIEW_SUCCESS',
  failure = 'CREATE_REVIEW_FAILURE',
}

export const getReviewsEntity = createEntity(GetReviewsActions, getReviewList);
export const getReviewsSaga = (reviewType: ReviewType) => ({
  type: GetReviewsActions.saga,
  reviewType,
});
export type getReviewsSaga = ReturnType<typeof getReviewsSaga>;

export const createReviewEntity = createEntity(
  CreateReviewActions,
  createReview,
);
export const createReviewSaga = () => ({ type: CreateReviewActions.saga });
export type CreateReviewSaga = ReturnType<typeof createReviewSaga>;

type ReviewAction =
  | EntityActions<typeof createReviewEntity>
  | EntityActions<typeof getReviewsEntity>;

export default ReviewAction;
