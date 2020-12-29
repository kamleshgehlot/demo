export function authHeader() {
  // return authorization header with basic auth credentials
  if (sessionStorage.token===null || sessionStorage.token === undefined) {
    return {  'content-type': 'application/json' };
  } else {
    return { 
      'content-type': 'application/json',
      Authorization: `Basic ${sessionStorage.token}` 
    };
  }
}
