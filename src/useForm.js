import { useState } from 'react';
// import { object } from "webidl-conversions";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = event => {
    if (event) event.preventDefault();

    const temp = validate(values);
    setErrors(temp);

    if (Object.keys(errors).length === 0) callback();
  };

  const handleChange = event => {
    // event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
