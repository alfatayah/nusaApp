import { all, fork } from 'redux-saga/effects';
import {watchLogin} from './login'
import {watchRegister} from './regist'
import {watchGetProduct} from './getProduct'
export default function* sagas() {
  yield all([
    fork(watchLogin),
    fork(watchRegister),
    fork(watchGetProduct),
  ]);
}
