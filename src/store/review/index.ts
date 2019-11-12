import produce from 'immer';
import { createReducer, baseAsyncActionHandler } from 'utils/redux';
import ReviewAction, { ReviewListAction } from './action'

export type ReviewState = {
  reviewList: {
    title: string;
    status: Status;
},  
};

const initialState: ReviewState = {
  reviewList: {
    title: '',
    status: 'INIT',
    },
};

const reducer = createReducer<ReviewAction, ReviewState>(initialState, {
  ...baseAsyncActionHandler('reviewList', ReviewListAction),
  [ReviewListAction.success]: (state, action) => {
    return produce(state, draft => {
      draft.reviewList.status = 'SUCCESS';
        draft.reviewList = {
          ...action.payload,                
        }
      });
  }
})

export default reducer;