import * as repoApi from 'api/repo';
import { createEntity } from 'utils/redux';

export const GET_REPOS = 'GET_REPOS' as const;

export const getReposEntity = createEntity(GET_REPOS, repoApi.getRepos);
export const getRepos = () => ({ type: GET_REPOS });
