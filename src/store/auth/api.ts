import { User } from 'models/user';

export const login = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => new Promise<User>(res => res({ username }));
