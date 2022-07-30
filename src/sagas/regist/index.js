import {takeLatest, put} from 'redux-saga/effects';
import { REGIST_ERROR,REGIST_PROCESS, REGIST_SUCCESS} from '../../actions';
import {API_NUSA, filterFetch} from '../../utils/constant';

function* register(action) {
  try {
    const result = yield filterFetch(API_NUSA + 'register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(action.data),
    });
    yield put({
      type: REGIST_SUCCESS,
      result: result,
    });
  } catch (error) {
    yield put({
      type: REGIST_ERROR,
      error: error,
    });
  }
}

export function* watchRegister() {
  yield takeLatest(REGIST_PROCESS, register);
}
