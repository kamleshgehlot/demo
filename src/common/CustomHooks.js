import { useState, useEffect } from 'react';

const useHooks = (state, callback, validate) => {
  const [inputs, setInputs] = useState(state);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    setIsSubmitting(false);
  }, [errors]);

  const checkError = (values=inputs) => {
    setErrors(validate(inputs, values, errors, isSubmitting));
  }

  
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    setIsSubmitting(true);
    checkError();
  };
  
  const handleChange = e => {
    let value = e.target.type === "checkbox" ? 
                e.target.checked : e.target.value;
    setInputs({ ...inputs, [e.target.name]: value });
    checkError({[e.target.name]: e.target.value });
  }

  const handleReset = RESET_VALUES => {
    setInputs(inputs => RESET_VALUES);    
  };

  const setInput = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleRandomInput = (newInputArray) => {
    let inputscopy = inputs;
    (newInputArray.length > 0 ? newInputArray : []).map(data => {
      inputscopy[data.name] = data.value;
    })
    setInputs({...inputs, inputscopy});
    delete inputs['inputscopy'];
  } 


  const handleDateChange = (name, date) => {
    setInputs({ ...inputs, [name]: date });
  }

  return {
    inputs,
    handleSubmit,
    handleChange,
    handleReset,
    setInput,
    errors,
    setErrors,
    isSubmitting,
    setIsSubmitting,
    handleRandomInput,
    handleDateChange
  };
};

export default useHooks;
