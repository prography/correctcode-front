import * as authApi from 'api/auth';
import { createEntity } from 'utils/redux';

export const LOGIN = 'LOGIN';
export const ME = 'ME';

export const loginEntity = createEntity(LOGIN, authApi.login);
export const login = () => ({ type: LOGIN });

export const meEntity = createEntity(ME, authApi.me);
export const me = (token?: string) => ({ type: ME, token });

export type Login = ReturnType<typeof login>;
export type Me = ReturnType<typeof me>;
