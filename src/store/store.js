import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, routerReducer } from '../router/router';
import { sagaMiddleware } from './sagas/saga';
import authReducer from './reducers/authReducer';
import errorReducer from './reducers/errorReducer';

import appConfig from '../appConfig';
import { identity } from 'lodash';
import dashboardReducer from './reducers/dashboardReducer/dashboardReducer';

const configureStore = (initialState = {}) => {
  const rootReducer = combineReducers({
    router: routerReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
    error: errorReducer,
  });

  // Create the store
  const compose = appConfig.enableReduxDevTools ? composeWithDevTools : identity;

  return createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleware, routerMiddleware)));
};

export { configureStore };
