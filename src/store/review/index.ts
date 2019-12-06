import produce from 'immer';
import { createReducer, baseAsyncActionHandler } from 'utils/redux';
import ReviewAction, {
  GetReviewsActions,
  GetUserReviewsActions,
  CreateReviewActions,
} from 'store/review/action';
import { Review } from 'models/review';

export type ReviewState = {
  reviews: Review[];
  userReviews: Review[];
  getReviewsStatus: Status;
  getUserReviewsStatus: Status;
  createReviewStatus: Status;
};

const initialState: ReviewState = {
  reviews: [],
  userReviews: [],
  getReviewsStatus: 'INIT',
  getUserReviewsStatus: 'INIT',
  createReviewStatus: 'INIT',
};

const reducer = createReducer<ReviewAction, ReviewState>(initialState, {
  ...baseAsyncActionHandler('getReviewsStatus', GetReviewsActions),
  ...baseAsyncActionHandler('getUserReviewsStatus', GetReviewsActions),
  ...baseAsyncActionHandler('createReviewStatus', CreateReviewActions),
  [GetUserReviewsActions.success]: (state, action) => {
    return produce(state, draft => {
      draft.reviews = action.payload;
      draft.getReviewsStatus = 'SUCCESS';
    });
  },
  [GetReviewsActions.success]: (state, action) => {
    return produce(state, draft => {
      draft.userReviews = action.payload;
      draft.getReviewsStatus = 'SUCCESS';
    });
  },
});

export default reducer;
