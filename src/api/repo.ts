import fetcher from 'utils/fetcher';
import { Repo } from 'models/repo';

export const getRepos = async () => {
  const { data } = await fetcher.get<Repo[]>('/repositories');
  return data;
};
