import {takeLatest, put} from 'redux-saga/effects';
import { REPORT_ERROR, REPORT_PROCESS, REPORT_SUCCESS} from '../../actions';
import {API_NUSA, filterFetch, filterFetchGet} from '../../utils/constant';

function* getReport(action) {
  try {
    const result = yield filterFetch(API_NUSA + 'report', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(action.data),
    });
    yield put({
      type: REPORT_SUCCESS,
      result: result,
    });
  } catch (error) {
    yield put({
      type: REPORT_ERROR,
      error: error,
    });
  }
}

export function* watchGetReport() {
  yield takeLatest(REPORT_PROCESS, getReport);
}
