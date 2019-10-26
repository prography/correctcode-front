import produce from 'immer';
import { createReducer } from 'utils/redux';
import { User } from 'models/user';
import AuthAction, { LoginAction } from './action';

export type AuthState = {
  user: User & {
    isLoggedIn: boolean;
  };
  login: {
    status: Status;
  };
};

const initialState: AuthState = {
  user: {
    username: '',
    isLoggedIn: false,
  },
  login: {
    status: 'INIT',
  },
};

const reducer = createReducer<AuthAction, AuthState>(initialState, {
  [LoginAction.request]: state => {
    return produce(state, draft => {
      draft.login.status = 'FETCHING';
    });
  },
  [LoginAction.success]: (state, action) => {
    return produce(state, draft => {
      draft.login.status = 'SUCCESS';
      draft.user.username = action.payload.username;
    });
  },
  [LoginAction.failure]: state => {
    return produce(state, draft => {
      draft.login.status = 'FAILURE';
    });
  },
});

export default reducer;
