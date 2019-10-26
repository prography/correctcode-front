import { login } from 'store/auth/api';
import { createEntity } from 'utils/redux';
import { User } from 'models/user';

export enum LoginAction {
  saga = 'LOGIN_SAGA',
  request = 'LOGIN_REQUEST',
  success = 'LOGIN_SUCCESS',
  failure = 'LOGIN_FAILURE',
}

export const loginEntity = createEntity(LoginAction, login);
export const loginSaga = (user: User) => ({ type: LoginAction.saga, ...user });
export type LoginSaga = ReturnType<typeof loginSaga>;

type AuthAction = EntityActions<typeof loginEntity.action>;

export default AuthAction;
