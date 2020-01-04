import { createReducer } from 'utils/redux';
import {
  getReviewsEntity,
  getUserReviewsEntity,
  createReviewEntity,
  resetReviews,
  resetUserReviews,
} from 'store/review/action';
import { Review } from 'models/review';
import { combineReducers } from 'redux';

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

const reviewsReducer = createReducer(initialState.reviews, switcher => {
  switcher
    .addCase(getReviewsEntity.request, state => {
      state.status = 'FETCHING';
    })
    .addCase(getReviewsEntity.success, (state, action) => {
      state.status = 'SUCCESS';
      state.items = action.payload;
    })
    .addCase(getReviewsEntity.failure, state => {
      state.status = 'FAILURE';
    })
    .addCase(resetReviews, state => {
      state.items = [];
      state.status = 'INIT';
    });
});

const userReviewsReducer = createReducer(initialState.userReviews, switcher => {
  switcher
    .addCase(getUserReviewsEntity.request, state => {
      state.status = 'FETCHING';
    })
    .addCase(getUserReviewsEntity.success, (state, action) => {
      state.status = 'SUCCESS';
      state.items = action.payload;
    })
    .addCase(getUserReviewsEntity.failure, state => {
      state.status = 'FAILURE';
    })
    .addCase(resetUserReviews, state => {
      state.items = [];
      state.status = 'INIT';
    });
});

const createReviewReducer = createReducer(
  initialState.createReview,
  switcher => {
    switcher
      .addCase(createReviewEntity.request, state => {
        state.status = 'FETCHING';
      })
      .addCase(createReviewEntity.success, state => {
        state.status = 'SUCCESS';
      })
      .addCase(createReviewEntity.failure, state => {
        state.status = 'FAILURE';
      });
  },
);

export default combineReducers({
  reviews: reviewsReducer,
  userReviews: userReviewsReducer,
  createReview: createReviewReducer,
});
