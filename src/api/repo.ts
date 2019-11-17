import fetcher from 'utils/fetcher';
import { Repo, Branch } from 'models/repo';

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
