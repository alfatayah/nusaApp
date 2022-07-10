export const FormValidation = (values) => {
  const errors = {};
  if (values.email || values.email === '') {
    errors.email = 'email harus diisi';
  } 



  return errors;
};
