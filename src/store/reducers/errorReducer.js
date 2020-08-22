import { handleActions } from 'redux-actions';
import { showError, resetError } from '../actions/errorActions';

const initialState = {
  title: 'Page Not Found',
  message: 'Sorry, We are currently building this page. Please come back later.',
  status: '404'
};
const errorReducer = handleActions(
  {
    [resetError](payload) {
      return { ...initialState };
    },
    [showError](state, { payload }) {
      return {
        ...payload
      };
    }
  },
  initialState
);

export default errorReducer;
