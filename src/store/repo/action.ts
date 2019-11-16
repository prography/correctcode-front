import { getRepos } from 'api/repo';
import { createEntity } from 'utils/redux';

export enum GetReposActions {
  saga = 'GET_REPOS_SAGA',
  request = 'GET_REPOS_REQUEST',
  success = 'GET_REPOS_SUCCESS',
  failure = 'GET_REPOS_FAILURE',
}

export const getReposEntity = createEntity(GetReposActions, getRepos);
export const getReposSaga = () => ({ type: GetReposActions.saga });
export type GetReposSaga = ReturnType<typeof getReposSaga>;

type RepoAction = EntityActions<typeof getReposEntity>;

export default RepoAction;
