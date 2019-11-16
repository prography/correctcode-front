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
  T extends {
    [key in K]: Status;
  },
  K extends {
    [K in keyof T]: T[K] extends Status ? K : never;
  }[keyof T]
>(
  name: K,
  actionTypes: { request: string; success: string; failure: string },
) => {
  return {
    [actionTypes.request]: (state: T) => {
      return produce(state, (draft: T) => {
        draft[name] = 'FETCHING' as T[K];
      });
    },
    [actionTypes.success]: (state: T) => {
      return produce(state, (draft: T) => {
        draft[name] = 'SUCCESS' as T[K];
      });
    },
    [actionTypes.failure]: (state: T) => {
      return produce(state, (draft: T) => {
        draft[name] = 'FAILURE' as T[K];
      });
    },
  };
};
