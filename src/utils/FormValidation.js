
import {regexEmail} from '../utils/utilization'
export const FormValidation = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'email harus diisi';
  }

  if (regexEmail(values.email)) {
    errors.email = 'format email tidak valid';
  }


  if (!values.password || values.password === '') {
    errors.password = 'password harus diisi';
  } 

  if (!values.nama || values.nama === '') {
    errors.nama = 'nama harus diisi';
  } 

  if (!values.nik || values.nik === '') {
    errors.nik = 'nik harus diisi';
  } 

  if (!values.emailRegist || values.emailRegist === '') {
    errors.emailRegist = 'email harus diisi';
  } 

  if (regexEmail(values.emailRegist)) {
    errors.emailRegist = 'format email tidak valid';
  }

  if (!values.telpon || values.telpon === '') {
    errors.telpon = 'telpon harus diisi';
  } 

  if (!values.passRegist || values.passRegist === '') {
    errors.passRegist = 'password harus diisi';
  } 

  if (!values.DateIn || values.DateIn === '') {
    console.log("DateIn");
    errors.DateIn = 'Tanggal harus diisi';
  } 

  if (!values.DateOut || values.DateIn === '') {
    errors.DateOut = 'Tanggal harus diisi';
  } 

  if (!values.totalValue || values.totalValue === '') {
    errors.total = 'Pilih tanggal booking';
  } 


  return errors;
};
