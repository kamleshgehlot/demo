import * as c from './config/Constants';
import APICaller from './config/APICaller.js'

export default {  
  register:async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/auth/register`;
    const data = await APICaller(payload, URL, "POST");
    return data;
  },
  
  getUserList:async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/auth/getUserList`;
    const data = await APICaller(payload, URL, "POST");
    return data;
  },
};