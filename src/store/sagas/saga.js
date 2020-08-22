import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import hierarchySaga from './dashboardSagas/hierarchySaga';

const sagaMiddleware = createSagaMiddleware();

const configureSaga = () => {
  function* rootSaga() {
    yield all([
      authSaga(),
      hierarchySaga(),
    ]);
  }

  sagaMiddleware.run(rootSaga);
};

export { sagaMiddleware, configureSaga };
