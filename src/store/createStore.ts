import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import State from 'store';
import rootSaga from 'saga';

const sagaMiddleware = createSagaMiddleware();
const cs = () => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = applyMiddleware(sagaMiddleware);

  const store = createStore(State, composeEnhancers(middlewares));
  sagaMiddleware.run(rootSaga);

  return store;
};

export default cs;
