import { combineReducers } from 'redux';
import { hierarchyReducer } from './hierarchyReducer';

const dashboardReducer = combineReducers({
  hierarchy: hierarchyReducer,
});

export default dashboardReducer;
