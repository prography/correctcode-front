import { createReducer, createAsyncReducer } from 'utils/redux';
import { getReposEntity } from 'store/repo/action';
import { Repo } from 'models/repo';

export type RepoState = {
  items: Repo[];
  status: Status;
};

const initialState: RepoState = {
  items: [],
  status: 'INIT',
};

export default createAsyncReducer(initialState, getReposEntity);
