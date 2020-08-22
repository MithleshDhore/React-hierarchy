import { createActions } from 'redux-actions';

const { showError, resetError } = createActions({}, 'SHOW_ERROR', 'RESET_ERROR');
export { showError, resetError };
