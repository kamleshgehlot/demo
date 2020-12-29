import axios from 'axios';
import {authHeader} from './AuthHeader.js';

const APICaller = async (payload, URL, methodType="GET", cancelPreRequest=false ) => {
    
    let cancelToken;
    //Check if there are any previous pending requests
    if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.");
    }
      //Save the cancel token for the current request
    cancelToken = axios.CancelToken.source();
    if(cancelPreRequest){
        payload.cancelToken = cancelToken.token;
    }
      
    try {
        
        const { data } = await axios(
            URL, 
            Object.assign(
                {}, 
                {method: methodType, headers: authHeader()},
                { data: payload}
            )
        );
        
        return data;
    } catch (error) {
        throw error;
    }
}

export default APICaller;