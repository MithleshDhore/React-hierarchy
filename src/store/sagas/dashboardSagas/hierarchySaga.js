import createFetchSaga from '../createFetchSaga';
import { fetchHierarchyActions } from '../../actions/dashboardActions/hierarchyActions';
import { hierarchyApi } from '../../../api/getHierarchyApi';

function* hierarchySaga() {
  const fetchHierarchySaga = createFetchSaga(fetchHierarchyActions, hierarchyApi);
  yield* fetchHierarchySaga();
}

export default hierarchySaga;
