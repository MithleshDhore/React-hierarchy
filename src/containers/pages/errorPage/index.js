import { connect } from 'react-redux';
import ErrorPage from './errorPage';
import { errorSelector } from '../../../store/selectors/errorSelector';
import { resetError } from '../../../store/actions/errorActions';
import { push } from 'redux-first-routing';
const mapStateToProps = state => ({
  error: errorSelector(state)
});
const mapDispatchToProps = dispatch => ({
  resetError: options => dispatch(resetError(options)),
  routeToGivenRoute: payload => dispatch(push(payload.route))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorPage);
