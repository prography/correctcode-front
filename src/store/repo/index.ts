import { createReducer } from 'utils/redux';
import { getReposEntity } from 'store/repo/action';
import { Repo } from 'models/repo';

export type RepoState = {
  repos: Repo[];
  getReposStatus: Status;
};

const initialState: RepoState = {
  repos: [],
  getReposStatus: 'INIT',
};

export default createReducer(initialState, switcher => {
  switcher
    .addCase(getReposEntity.request, state => {
      state.getReposStatus = 'FETCHING';
    })
    .addCase(getReposEntity.success, (state, action) => {
      state.getReposStatus = 'SUCCESS';
      state.repos = action.payload;
    })
    .addCase(getReposEntity.failure, state => {
      state.getReposStatus = 'FAILURE';
    });
});
