import React from "react";
import {isNullOrUndefined} from '../../utils/conditionChecker.js';

//Regex
import {validString, validNumber, validEmail, passwordRegex} from './Regex.js';

export const validate = {
    required: (value)=>{
        if(value === "" || isNullOrUndefined(value)){
            return `Field is required`;
        }
    },
    string: (value) => {
        if(!validString.test(value)){
            return `Field only contain string`;
        } 
    },
    email:  (value) => {
        if(!validEmail.test(value)){
            return `Email address is invalid`;
        } 
    },
    password: (value) => {
        if(!passwordRegex.test(value)){
            return `Kindly follow the password guidelines`;
        } 
    },
    confirmPassword: (value, password) => {
        if(value !== password){
            return `Password not matched`;
        } 
    },
    number: (value) => {
        if(!validNumber.test(value)){
            return `Field only contain numbers`;
        } 
    }
}



export const errorMessages = (valueKey, isSubmitting, errors, errorBox) => {
    if(isSubmitting === true){
        return errors;
    }else{
        if(isNullOrUndefined(errorBox)){
            if(errors[valueKey] === undefined){
                errors = {};
            }
        }else{
            Object.keys(errorBox).map((key) => {
                if(key === valueKey && errors[key] === undefined){
                    delete errors[key];                    
                }else if(key !== valueKey){
                    errors[key] = errorBox[key];
                }
            })
        }
        return errors;
    }
}
