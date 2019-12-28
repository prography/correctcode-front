import fetcher from 'utils/fetcher';
import { User } from 'models/user';

export const login = async () => {
  await fetcher.get('/auth/github');
};

export const me = async (token?: string) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  const { data } = await fetcher.get<User>('/me', { headers });
  return data;
};
