
// Validate functions
import {validate, errorMessages} from '../utils/Validate.js'
const V = validate;



export default function registeration(inputs, values, errorBox, isSubmitting) {
    let valueKey = Object.keys(values)[0];
    let errors = {};
    
    Object.keys(values).map(key => {
        let value = values[key];
        let err ='';
        if(key === 'first_name'){            
            err = V.required(value) ||  V.string(value);
            if(err) errors[key] = err; 
        }
        if(key === 'last_name'){
            err = V.required(value) ||  V.string(value);
            if(err) errors[key] = err; 
        }
        if(key === 'email'){
            err = V.required(value) ||  V.email(value);
            if(err) errors[key] = err; 
        }        
        if(key === 'mobile'){
            err = V.required(value) || V.number(value);
            if(err) errors[key] = err;
        }
        
        if(key === 'country_code'){            
            err = V.required(value) ||  V.number(value);
            if(err) errors[key] = err; 
        }
    });

    return errorMessages(valueKey, isSubmitting, errors, errorBox);
}
