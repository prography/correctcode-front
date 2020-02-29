import * as reviewApi from 'api/review';
import { createEntity, createAction } from 'utils/redux';
import { UserType, NewReview } from 'models/review';

export const GET_REVIEWS = 'GET_REVIEWS';
export const GET_USER_REVIEWS = 'GET_USER_REVIEWS';
export const RESET_REVIEWS = 'RESET_REVIEWS';
export const RESET_USER_REVIEWS = 'RESET_USER_REVIEWS';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const CREATE_REVIEW_BY_PR = 'CREATE_REVIEW_BY_PR';

export const getReviewsEntity = createEntity(GET_REVIEWS, reviewApi.getReviews);
export const getReviews = () => ({
  type: GET_REVIEWS,
});
export const resetReviews = createAction(RESET_REVIEWS);

export const getUserReviewsEntity = createEntity(
  GET_USER_REVIEWS,
  reviewApi.getUserReviews,
);
export const getUserReviews = (userType: UserType) => ({
  type: GET_USER_REVIEWS,
  userType,
});
export const resetUserReviews = createAction(RESET_USER_REVIEWS);

export const createReviewEntity = createEntity(
  CREATE_REVIEW,
  reviewApi.createReview,
);
export const createReview = (reviewId: string, review: NewReview) => ({
  type: CREATE_REVIEW,
  reviewId,
  review,
});

export const createReviewByPrEntity = createEntity(
  CREATE_REVIEW_BY_PR,
  reviewApi.createReviewByPr,
);
export const createReviewByPr = (
  repoId: string,
  prId: string,
  review: Pick<NewReview, 'title' | 'description'>,
) => ({
  type: CREATE_REVIEW_BY_PR,
  repoId,
  prId,
  review,
});

export type GetReviews = ReturnType<typeof getReviews>;
export type GetUserReviews = ReturnType<typeof getUserReviews>;
export type CreateReview = ReturnType<typeof createReview>;
export type CreateReviewByPr = ReturnType<typeof createReviewByPr>;
