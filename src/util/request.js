import request from 'superagent';
const defaultAjaxTimeout = 600000;

// this is here so that we can append the .timeout call to all of our ajax requests with the default value.
const requestWrapper = method => url => data => {
  const gateWayUrl = process.env[process.env.REACT_APP_STAGE];
  url = gateWayUrl ? `${gateWayUrl}${url}` : url;
  const requestPromise = request[method](url);
  if (method === 'get') {
    requestPromise.query(data);
  } else if (method === 'fileOperationDownload') {
    requestPromise.send(data);
    requestPromise.responseType('blob');
  } else if (method === 'fileOperationUpload') {
    requestPromise.attach(data.fileData);
  } else {
    requestPromise.send(data);
  }

  return requestPromise
    .timeout(defaultAjaxTimeout)
    .then(function(res) {
      if (res.body && res.body.error) {
        throw res.body.error;
      }
      return res;
    })
    .catch(function(err) {
      // TO DO: Handle for Timeout Case
      /*Handling only login authorization error for time being 
                   till token is implemented.
            Removing XSRF-Token manually on unauthorized login
            */
      // if (err.response.body.status === 401 || err.response.body.status === 403) {
      //   Cookie.remove(appConfig.authCookieName);
      // }
      console.log('Error:', err);
      throw err.response.body;
    });
};

const requestWithCsrfTokenInQueryString = method => url => {
  // const tokenValue = Cookie.get(appConfig.authCookieName);
  // if (url.indexOf('?') === -1) {
  //   url += '?';
  // } else {
  //   url += '&';
  // }
  // url += CSRF_TOKEN_NAME + '=' + tokenValue;
  return requestWrapper(method)(url);
};

const getTenantId = payload => {
  return payload.carrierCode ? payload.carrierCode : payload.productGroupCode ? payload.productGroupCode : '';
};

const get = requestWrapper('get');
const post = requestWithCsrfTokenInQueryString('post');
const put = requestWithCsrfTokenInQueryString('put');
const del = requestWithCsrfTokenInQueryString('del');
const fileOperationDownload = requestWrapper('post');
const fileOperationUpload = requestWrapper('post');

export { get, put, post, del, fileOperationDownload, fileOperationUpload };
