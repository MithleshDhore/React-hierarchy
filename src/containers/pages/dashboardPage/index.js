import DashboardPage from './DashboardPage';
import { connect } from 'react-redux';
import { hierarchySelector } from '../../../store/selectors/dashboardSelector';
import { fetchHierarchyActions } from '../../../store/actions/dashboardActions/hierarchyActions';

const mapStateToProps = state => ({
  hierarchy: hierarchySelector(state)
});
const mapDispatchToProps = dispatch => ({
  fetchHierarchy: payload => dispatch(fetchHierarchyActions.request(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
