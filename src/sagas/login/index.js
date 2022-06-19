import {takeLatest, put} from 'redux-saga/effects';
import { LOGIN_ERROR, LOGIN_PROCESS, LOGIN_SUCCESS} from '../../actions';
import {API_NUSA, filterFetch} from '../../utils/constant';

function* login(action) {
  try {
    const result = yield filterFetch(API_NUSA + 'login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(action.data),
    });
    yield put({
      type: LOGIN_SUCCESS,
      result: result,
    });
  } catch (error) {
    yield put({
      type: LOGIN_ERROR,
      error: error,
    });
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN_PROCESS, login);
}
