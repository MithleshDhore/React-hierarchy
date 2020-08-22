import React from 'react';
import App from '../components/app/App';
import ErrorPage from '../containers/pages/errorPage';
import DashboardPage from '../containers/pages/dashboardPage';


const routes = [
  {
    path: ['/dashboard', '', '/'],
    authenticated: false,
    name: 'index-page',
    action: context => (
      <App context={context}>
        <DashboardPage context={context} />
      </App>
    )
  },
  {
    path: ['/invalid-page', '(.*)'],
    authenticated: false,
    hasQueryParam: false,
    action: () => (
        <App>
            <ErrorPage />
        </App>
    )
}
];

export { routes };
