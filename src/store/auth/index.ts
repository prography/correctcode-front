import { createReducer } from 'utils/redux';
import { User } from 'models/user';
import { meEntity } from './action';

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
    profileImg: '',
  },
  loginStatus: 'INIT',
  meStatus: 'INIT',
};

const reducer = createReducer(initialState, switcher => {
  switcher
    .addCase(meEntity.request, state => {
      state.meStatus = 'FETCHING';
    })
    .addCase(meEntity.success, (state, action) => {
      state.meStatus = 'SUCCESS';
      state.user = {
        ...action.payload,
        isLoggedIn: true,
      };
    })
    .addCase(meEntity.failure, state => {
      state.meStatus = 'FAILURE';
      state.user = {
        ...initialState.user,
        isLoggedIn: false,
      };
    });
});

export default reducer;
