import produce from 'immer';
import { createReducer, baseAsyncActionHandler } from 'utils/redux';
import ReviewAction, { GetReviewsActions } from './action'
import { Review } from 'models/review';

export type ReviewState = {
  reviews: Review[];
  getReviewStatus: Status;
};

const initialState: ReviewState = {  
  reviews: [],
  getReviewStatus: 'INIT',
};

const reducer = createReducer<ReviewAction, ReviewState>(initialState, {
  ...baseAsyncActionHandler('reviewList', GetReviewsActions),
  [GetReviewsActions.success]: (state, action) => {
    return produce(state, draft => {
      draft.reviews = action.payload;        
      draft.getReviewStatus = 'SUCCESS';      
    });
  }
})

export default reducer;