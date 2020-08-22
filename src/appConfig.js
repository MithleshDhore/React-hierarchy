export default {
  // Authentication will cause a redirect to this page
  userDashboardPage: process.env.REACT_APP_DASHBOARD_PAGE,
  // Unauthenticated users will be redirected to this page
  loginPage: 'index-page',
  // Validate Auth after how many seconds
  validateAuthTimeout: 60000, // once a minute
  userHomePage: 'home-page',

  //Enable redux dev tools?
  enableReduxDevTools: false || process.env.REACT_APP_ENABLE_REDUX_DEV_TOOL,

  //Cookie name used for authentication
  authCookieName: 'oAuthToken',

  routes: {
    dashboard: `${process.env.PUBLIC_URL}/dashboard`,
    reports: `${process.env.PUBLIC_URL}/register`,
    summary: `${process.env.PUBLIC_URL}/summary`,
  }
};
