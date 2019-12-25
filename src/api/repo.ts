import fetcher from 'utils/fetcher';
import { Repo, Branch, BranchStatus } from 'models/repo';
import qs from 'query-string';

export const getRepos = async () => {
  const { data } = await fetcher.get<{ data: Repo[] }>('/repositories');
  return data.data;
};

export const getBranches = async (repoId: Repo['id']) => {
  const { data } = await fetcher.get<{ data: Branch[] }>(
    `/repositories/${repoId}/branches`,
  );
  return data.data;
};

export const compareBranch = async (
  repoId: Repo['id'],
  base: string,
  head: string,
) => {
  const { data } = await fetcher.get<{ data: { status: BranchStatus } }>(
    `/repositories/${repoId}/branches/compare?${qs.stringify({ base, head })}`,
  );
  return data.data;
};
