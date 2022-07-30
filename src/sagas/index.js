import { all, fork } from 'redux-saga/effects';
import {watchLogin} from './login'
import {watchRegister} from './regist'
export default function* sagas() {
  yield all([
    fork(watchLogin),
    fork(watchRegister),
  ]);
}
