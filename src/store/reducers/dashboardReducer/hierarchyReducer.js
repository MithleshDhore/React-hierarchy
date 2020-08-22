import { handleActions } from 'redux-actions';
import { fetchHierarchyActions } from '../../actions/dashboardActions/hierarchyActions';

const initialState = {
    apiResponse: []
};

const hierarchyReducer = handleActions(
    {
        [fetchHierarchyActions.triggered]() {
            return { ...initialState };
        },

        [fetchHierarchyActions.succeeded](state, { payload }) {
            return {
                ...state,
                apiResponse: payload
            };
        },

        [fetchHierarchyActions.failed]() {
            return initialState;
        }
    },
    initialState
);

export { hierarchyReducer };