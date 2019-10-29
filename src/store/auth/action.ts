import { login, me } from 'store/auth/api';
import { createEntity } from 'utils/redux';

export enum LoginAction {
  saga = 'LOGIN_SAGA',
  request = 'LOGIN_REQUEST',
  success = 'LOGIN_SUCCESS',
  failure = 'LOGIN_FAILURE',
}

export enum MeAction {
  saga = 'ME_SAGA',
  request = 'ME_REQUEST',
  success = 'ME_SUCCESS',
  failure = 'ME_FAILURE',
}

export const loginEntity = createEntity(LoginAction, login);
export const loginSaga = () => ({ type: LoginAction.saga });
export type LoginSaga = ReturnType<typeof loginSaga>;

export const meEntity = createEntity(MeAction, me);
export const meSaga = () => ({ type: MeAction.saga });
export type MeSaga = ReturnType<typeof meSaga>;

type AuthAction =
  | EntityActions<typeof loginEntity>
  | EntityActions<typeof meEntity>;

export default AuthAction;
