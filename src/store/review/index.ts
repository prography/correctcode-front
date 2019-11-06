import produce from 'immer';
import { createReducer, baseAsyncActionHandler } from 'utils/redux';
import ReviewAction, {
  GetReviewsActions,
  CreateReviewActions,
} from 'store/review/action';
import { Review } from 'models/review';

export type ReviewState = {
  reviews: Review[];
  getReviewStatus: Status;
  createReviewStatus: Status;
};

const initialState: ReviewState = {
  reviews: [],
  getReviewStatus: 'INIT',
  createReviewStatus: 'INIT',
};

const reducer = createReducer<ReviewAction, ReviewState>(initialState, {
  ...baseAsyncActionHandler('reviewList', GetReviewsActions),
  ...baseAsyncActionHandler('createReviewStatus', CreateReviewActions),
  [GetReviewsActions.success]: (state, action) => {
    return produce(state, draft => {
      draft.reviews = action.payload;
      draft.getReviewStatus = 'SUCCESS';
    });
  },
  [CreateReviewActions.success]: (state, action) => {
    return produce(state, draft => {
      draft.reviews = action.payload;
    });
  },
});

export default reducer;
