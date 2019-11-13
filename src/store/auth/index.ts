import produce from 'immer';
import { createReducer, baseAsyncActionHandler } from 'utils/redux';
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
		email: '',
		isLoggedIn: false
	},
	login: {
		status: 'INIT'
	},
	me: {
		status: 'INIT'
	}
};

const reducer = createReducer<AuthAction, AuthState>(initialState, {
	...baseAsyncActionHandler('login', LoginAction),
	...baseAsyncActionHandler('me', MeAction),
	[MeAction.success]: (state, action) => {
		return produce(state, (draft) => {
			draft.me.status = 'SUCCESS';
			draft.user.isLoggedIn = true;
			draft.user = {
				...action.payload,
				isLoggedIn: true
			};
		});
	}
});

export default reducer;
