import React, { Fragment } from 'react';
import ErrorComponent from '../../../components/error/ErrorComponent';

const ErrorPage = ({ error, resetError, context, routeToGivenRoute }) => (
  <Fragment>
    <ErrorComponent error={error} resetError={resetError} context={context} routeToGivenRoute={routeToGivenRoute} />
  </Fragment>
);

export default ErrorPage;
