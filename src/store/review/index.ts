import { createAsyncReducer } from 'utils/redux';
import {
  getReviewsEntity,
  getUserReviewsEntity,
  createReviewEntity,
  resetReviews,
  resetUserReviews,
} from 'store/review/action';
import { Review } from 'models/review';
import { combineReducers } from 'redux';

// TODO: 서버 리스폰스 형식 정해지면 데이터 타입 정규화
export type ReviewState = {
  reviews: {
    items: Review[];
    status: Status;
  };
  userReviews: {
    items: Review[];
    status: Status;
  };
  createReview: {
    status: Status;
  };
};

const initialState: ReviewState = {
  reviews: {
    items: [],
    status: 'INIT',
  },
  userReviews: {
    items: [],
    status: 'INIT',
  },
  createReview: {
    status: 'INIT',
  },
};

const reviewsReducer = createAsyncReducer(
  initialState.reviews,
  getReviewsEntity,
  switcher => {
    switcher.addCase(resetReviews, state => {
      state.items = [];
      state.status = 'INIT';
    });
  },
);

const userReviewsReducer = createAsyncReducer(
  initialState.userReviews,
  getUserReviewsEntity,
  switcher => {
    switcher.addCase(resetUserReviews, state => {
      state.items = [];
      state.status = 'INIT';
    });
  },
);

const createReviewReducer = createAsyncReducer(
  initialState.createReview,
  createReviewEntity,
);

export default combineReducers({
  reviews: reviewsReducer,
  userReviews: userReviewsReducer,
  createReview: createReviewReducer,
});
