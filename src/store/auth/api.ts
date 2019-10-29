import fetcher from 'utils/fetcher';
import { User } from 'models/user';

export const login = async () => {
  await fetcher.get('/auth/github');
};

export const me = async () => {
  const { data } = await fetcher.get<User>('/me');
  return data;
};
