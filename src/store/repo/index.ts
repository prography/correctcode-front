import produce from 'immer';
import { createReducer, baseAsyncActionHandler } from 'utils/redux';
import { Repo } from 'models/repo';
import RepoAction, { GetReposActions } from './action';

export type RepoState = {
  repos: Repo[];
  getReposStatus: Status;
};

const initialState: RepoState = {
  repos: [],
  getReposStatus: 'INIT',
};

export default createReducer<RepoAction, RepoState>(initialState, {
  ...baseAsyncActionHandler('getReposStatus', GetReposActions),
  [GetReposActions.success]: (state, action) => {
    return produce(state, draft => {
      draft.repos = action.payload;
      draft.getReposStatus = 'SUCCESS';
    });
  },
});
