import fetcher from 'utils/fetcher';
import { User } from 'models/user';

export const login = async (token?: string) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  await fetcher.get('/auth/github', { headers });
};

export const me = async () => {
  const { data } = await fetcher.get<User>('/me');
  return data;
};
