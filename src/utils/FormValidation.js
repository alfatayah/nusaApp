export const FormValidation = (values) => {
  const errors = {};
  if (!values.email || values.email === '') {
    errors.email = 'email harus diisi';
  } 

  if (!values.password || values.password === '') {
    errors.password = 'password harus diisi';
  } 



  return errors;
};
