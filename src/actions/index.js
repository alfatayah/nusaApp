export const LOGIN_PROCESS = 'LOGIN_PROCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGIST_PROCESS = 'REGIST_PROCESS';
export const REGIST_SUCCESS = 'REGIST_SUCCESS';
export const REGIST_ERROR = 'REGIST_ERROR';

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



