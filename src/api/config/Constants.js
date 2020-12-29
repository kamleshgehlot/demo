const configureApiRoot = () => {
    const hostname = window && window.location && window.location.hostname;
    switch (hostname) {
        case 'test':
            return 'http://xyz';
        case 'localhost':
            return 'http://localhost:5000';
        default:
            return 'http://adc';
    }
  };
  
export const API_URL = configureApiRoot();
export const AUTH_URL = configureApiRoot();
export const API_CONSUMER = configureApiRoot();
console.log('##**API**##',API_CONSUMER);

