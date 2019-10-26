import produce from 'immer';
import { createReducer } from 'utils/redux';
import { User } from 'models/user';
import AuthAction, { LoginAction, MeAction } from './action';

export type AuthState = {
  user: User & {
    isLoggedIn: boolean;
  };
  login: {
    status: Status;
  };
  me: {
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
  me: {
    status: 'INIT',
  },
};

const reducer = createReducer<AuthAction, AuthState>(initialState, {
  [LoginAction.request]: state => {
    return produce(state, draft => {
      draft.login.status = 'FETCHING';
    });
  },
  [LoginAction.success]: state => {
    return produce(state, draft => {
      draft.login.status = 'SUCCESS';
    });
  },
  [LoginAction.failure]: state => {
    return produce(state, draft => {
      draft.login.status = 'FAILURE';
    });
  },
  [MeAction.request]: state => {
    return produce(state, draft => {
      draft.me.status = 'FETCHING';
    });
  },
  [MeAction.success]: (state, action) => {
    return produce(state, draft => {
      draft.me.status = 'SUCCESS';
      draft.user.isLoggedIn = true;
      draft.user = {
        ...action.payload,
        isLoggedIn: true,
      };
    });
  },
  [MeAction.failure]: state => {
    return produce(state, draft => {
      draft.me.status = 'FAILURE';
    });
  },
});

export default reducer;
