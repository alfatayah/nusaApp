import { all, fork } from 'redux-saga/effects';
import {watchLogin} from './login'

export default function* sagas() {
  yield all([
    fork(watchLogin)
  ]);
}
