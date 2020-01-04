import { Action } from 'redux';
import produce, { Draft } from 'immer';

// Action Map 타입
type Actions<T extends keyof any = string> = Record<T, Action>;
// type property 를 가지는 액션 creator
type TypedActionCreator<Type extends string> = {
  (...args: any[]): Action<Type>;
  type: Type;
};
// type이 있는 ActionCreator 만들기
export const createAction = <P, Type extends string = string>(type: Type) => {
  function fn(payload?: P): { type: Type };
  function fn(payload: P): { type: Type; payload: P };
  function fn(payload: any): any {
    return {
      type,
      payload,
    };
  }
  fn.type = type;
  return fn;
};
// entity 만들기 - 비동기일 때 사용
export const createEntity = <Params extends any[], Res>(
  prefix: string,
  service: Service<Params, Res>,
) => ({
  request: createAction<Params>(`${prefix}_REQUEST`),
  success: createAction<Res>(`${prefix}_SUCCESS`),
  failure: createAction<string>(`${prefix}_FAILURE`),
  service,
});
// 내부적으로 immer를 사용하는 handler
type Handler<S, AC extends TypedActionCreator<string>> = (
  state: Draft<S>,
  action: ReturnType<AC>,
) => S | void;
// handler map
type Handlers<S, AS extends Actions> = {
  [T in keyof AS]: AS[T] extends Action
    ? Handler<S, TypedActionCreator<AS[T]['type']>>
    : void;
};
// addCase를 통해 reducer의 switch 케이스를 만드는 클래스
class Switcher<S> {
  switcherMap: Handlers<S, any> = {};
  addCase<Type extends string, AC extends TypedActionCreator<Type>>(
    action: AC,
    handler: Handler<S, AC>,
  ) {
    this.switcherMap[action.type] = handler;
    return this;
  }
}
// 리듀서 만들기
export const createReducer = <S>(
  initialState: S,
  createSwitcher: (builder: Switcher<S>) => void,
) => {
  const switcher = new Switcher<S>();
  createSwitcher(switcher);
  const { switcherMap } = switcher;
  const reducer = (state: S = initialState, action: any) => {
    if (action.type in switcherMap) {
      const matchHandle = switcherMap[action.type];
      return matchHandle
        ? produce(state, draft => matchHandle(draft, action))
        : state;
    }
    return state;
  };

  return reducer;
};

/*
간편한 리듀서 만들기 초안..

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
*/
