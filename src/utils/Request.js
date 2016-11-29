import 'whatwg-fetch';
import qs from 'qs';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function catchError(err) {
  
  console.error(err);
  
}

const API_DOMAIN = 'http://123.57.245.43/yishipi/api/web/v1/';

export function post(url, postData) {
  
  url = API_DOMAIN + url;
  
  postData = postData ? postData : {} ;

  postData['time'] = '1468403730';
  postData['token'] = '7a5022d630e145ccd96b06ee927c6806';
  postData['authToken'] = '3e6ftHOukv5vXRsO4F1nxw=I0WI9wUHjq3GLtZseQRgCpMJXgBdkZh8R5tEJ8EnGz/eOH02HYq/6bE4tI9qjRTXvifOkP3PHcxQHhH9PUuRAtsVKoXqoJhAI1D5qIh3xCm5F0KTPJGT3xdow8TxU3MS2hRLh1OVG9VM';
  
  let options = {
    method: 'post',
    body: qs.stringify(postData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  };
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch(catchError);
}
