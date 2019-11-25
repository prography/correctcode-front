import { useEffect, useReducer, Reducer } from 'react';
import produce from 'immer';

enum ActionType {
  Request = 'request',
  Success = 'success',
  Failure = 'failure',
}

type State<T> = {
  data: T;
  status: Status;
  error: any;
};

const requestAction = () => ({ type: ActionType.Request } as const);
const successAction = <T>(payload: T) =>
  ({
    type: ActionType.Success,
    payload,
  } as const);
const failureAction = (error: any) =>
  ({ type: ActionType.Failure, error } as const);

type Action<T> =
  | ReturnType<typeof requestAction>
  | { type: ActionType.Success; payload: T }
  | ReturnType<typeof failureAction>;

const reducer = <T>(state: State<T>, action: Action<T>) => {
  switch (action.type) {
    case ActionType.Request: {
      return produce(state, draft => {
        draft.status = 'FETCHING';
      });
    }
    case ActionType.Success: {
      return produce(state, (draft: State<T>) => {
        draft.status = 'SUCCESS';
        draft.data = action.payload;
      });
    }
    case ActionType.Failure: {
      return produce(state, draft => {
        draft.status = 'FAILURE';
      });
    }
  }
};

const useFetch = <Params extends any[], Res>(
  api: Service<Params, Res>,
  initialData: any,
  deps: any[] = [],
  ...params: Params
) => {
  const [state, dispatch] = useReducer<Reducer<State<Res>, Action<Res>>>(
    reducer,
    {
      status: 'INIT',
      data: initialData,
      error: '',
    },
  );
  useEffect(() => {
    dispatch(requestAction());
    api(...params)
      .then(res => {
        dispatch(successAction(res));
      })
      .catch(err => {
        dispatch(failureAction(err));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, dispatch]);

  return {
    state,
    dispatch,
    requestAction,
    successAction,
    failureAction,
  };
};

export default useFetch;
