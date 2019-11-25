import { createReview, getUserReviews, getReviews } from 'api/review';
import { createEntity } from 'utils/redux';
import { UserType } from 'models/review';

export enum GetReviewsActions {
  saga = 'GET_REVIEWS_SAGA',
  request = 'GET_REVIEWS_REQUEST',
  success = 'GET_REVIEWS_SUCCESS',
  failure = 'GET_REVIEWS_FAILURE',
}
export enum GetUserReviewsActions {
  saga = 'GET_USER_REVIEWS_SAGA',
  request = 'GET_USER_REVIEWS_REQUEST',
  success = 'GET_USER_REVIEWS_SUCCESS',
  failure = 'GET_USER_REVIEWS_FAILURE',
}

export enum CreateReviewActions {
  saga = 'CREATE_REVIEW_SAGA',
  request = 'CREATE_REVIEW_REQUEST',
  success = 'CREATE_REVIEW_SUCCESS',
  failure = 'CREATE_REVIEW_FAILURE',
}

export const getReviewsEntity = createEntity(GetReviewsActions, getReviews);
export const getReviewsSaga = () => ({
  type: GetReviewsActions.saga,
});
export type getReviewsSaga = ReturnType<typeof getReviewsSaga>;

export const getUserReviewsEntity = createEntity(
  GetUserReviewsActions,
  getUserReviews,
);
export const getUserReviewsSaga = (userType: UserType) => ({
  type: GetUserReviewsActions.saga,
  userType,
});
export type getUserReviewsSaga = ReturnType<typeof getUserReviewsSaga>;

export const createReviewEntity = createEntity(
  CreateReviewActions,
  createReview,
);
export const createReviewSaga = () => ({ type: CreateReviewActions.saga });
export type CreateReviewSaga = ReturnType<typeof createReviewSaga>;

type ReviewAction =
  | EntityActions<typeof createReviewEntity>
  | EntityActions<typeof getReviewsEntity>
  | EntityActions<typeof getUserReviewsEntity>;

export default ReviewAction;
