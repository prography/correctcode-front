import * as reviewApi from 'api/review';
import { createEntity } from 'utils/redux';
import { UserType, NewReview } from 'models/review';

export const GET_REVIEWS = 'GET_REVIEWS';
export const GET_USER_REVIEWS = 'GET_USER_REVIEWS';
export const CREATE_REVIEW = 'CREATE_REVIEW';

export const getReviewsEntity = createEntity(GET_REVIEWS, reviewApi.getReviews);
export const getReviews = () => ({
  type: GET_REVIEWS,
});

export const getUserReviewsEntity = createEntity(
  GET_USER_REVIEWS,
  reviewApi.getUserReviews,
);
export const getUserReviews = (userType: UserType) => ({
  type: GET_USER_REVIEWS,
  userType,
});

export const createReviewEntity = createEntity(
  CREATE_REVIEW,
  reviewApi.createReview,
);
export const createReview = (reviewId: string, review: NewReview) => ({
  type: CREATE_REVIEW,
  reviewId,
  review,
});

export type GetReviews = ReturnType<typeof getReviews>;
export type GetUserReviews = ReturnType<typeof getUserReviews>;
export type CreateReview = ReturnType<typeof createReview>;
