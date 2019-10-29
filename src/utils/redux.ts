import { Action } from 'redux';
import produce from 'immer';

type GetAction<
  TAction extends Action,
  TType extends TAction['type']
> = TAction extends Action<TType> ? TAction : never;

type InitialHandler<TState, TRootAction extends Action> = {
  [P in TRootAction['type']]?: (
    state: TState,
    action: GetAction<TRootAction, P>,
  ) => TState;
};

export type EntityTypes<R, S, F> = {
  request: R;
  success: S;
  failure: F;
};

export const createEntity = <R, S, F, Params extends any[], Res>(
  actionTypes: EntityTypes<R, S, F>,
  service: Service<Params, Res>,
) => ({
  action: {
    request: (...args: Params) =>
      ({ type: actionTypes.request, payload: args } as const),
    success: (payload: Res) =>
      ({ type: actionTypes.success, payload } as const),
    failure: (error: string) =>
      ({ type: actionTypes.failure, payload: error } as const),
  },
  service,
});

export const createReducer = <TAction extends Action, TState>(
  initialState: TState,
  handler: InitialHandler<TState, TAction> = {},
) => {
  const baseHandler: any = {
    ...handler,
  };

  const reducer = (state: TState = initialState, action: TAction) => {
    if (action.type in handler) {
      const matchHandle = baseHandler[action.type];
      return matchHandle && matchHandle(state, action);
    }
    return state;
  };

  return reducer;
};

export const baseAsyncActionHandler = <
  State extends {
    [index: string]: {
      status: Status;
    };
  }
>(
  name: string,
  actionTypes: { request: string; success: string; failure: string },
) => {
  return {
    [actionTypes.request]: (state: State) => {
      return produce(state, draft => {
        draft[name].status = 'FETCHING';
      });
    },
    [actionTypes.success]: (state: State) => {
      return produce(state, draft => {
        draft[name].status = 'SUCCESS';
      });
    },
    [actionTypes.failure]: (state: State) => {
      return produce(state, draft => {
        draft[name].status = 'FAILURE';
      });
    },
  };
};
