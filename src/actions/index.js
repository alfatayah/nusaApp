export const LOGIN_PROCESS = 'LOGIN_PROCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGIST_PROCESS = 'REGIST_PROCESS';
export const REGIST_SUCCESS = 'REGIST_SUCCESS';
export const REGIST_ERROR = 'REGIST_ERROR';

export const GET_PRODUCT_PROCESS = 'GET_PRODUCT_PROCESS';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

export const BOOKING_PROCESS = 'BOOKING_PROCESS';
export const BOOKING_SUCCESS = 'BOOKING_SUCCESS';
export const BOOKING_ERROR = 'BOOKING_ERROR';

export const SELECTED_PRODUCT = 'SELECTED_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_ALL_PRODUCT = 'DELETE_ALL_PRODUCT';

export const REPORT_PROCESS = 'REPORT_PROCESS';
export const REPORT_SUCCESS = 'REPORT_SUCCESS';
export const REPORT_ERROR = 'REPORT_ERROR';

export function login(data) {
  return {
    type: LOGIN_PROCESS,
    data: data,
  };
}

export function register(data) {
  return {
    type: REGIST_PROCESS,
    data: data,
  };
}

export function getProduct() {
  return {
    type: GET_PRODUCT_PROCESS,
  };
}

export function selectedProduct(data, flag) {
  if(flag == 1){
    return {
      type: SELECTED_PRODUCT,
      data: data,
    };
  } else if(flag == 2){
    return {
      type: DELETE_ALL_PRODUCT,
      data: data,
    };
  } else {
    return {
      type: DELETE_PRODUCT,
      data: data,
    };
  }
}

export function booking(data) {
  return {
    type: BOOKING_PROCESS,
    data: data,
  };
}

export function getReport(data) {
  return {
    type: REPORT_PROCESS,
    data: data,
  };
}