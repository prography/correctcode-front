import produce from 'immer';
import { createReducer, baseAsyncActionHandler } from 'utils/redux';
import { User } from 'models/user';
import AuthAction, { LoginAction, MeAction } from './action';

export type AuthState = {
  user: User & {
    isLoggedIn: boolean;
  };
  loginStatus: Status;
  meStatus: Status;
};

const initialState: AuthState = {
  user: {
    id: 0,
    name: '',
    displayName: '',
    email: '',
    isLoggedIn: false,
  },
  loginStatus: 'INIT',
  meStatus: 'INIT',
};

const reducer = createReducer<AuthAction, AuthState>(initialState, {
  ...baseAsyncActionHandler('loginStatus', LoginAction),
  ...baseAsyncActionHandler('meStatus', MeAction),
  [MeAction.success]: (state, action) => {
    return produce(state, draft => {
      draft.meStatus = 'SUCCESS';
      draft.user.isLoggedIn = true;
      draft.user = {
        ...action.payload,
        isLoggedIn: true,
      };
    });
  },
});

export default reducer;
