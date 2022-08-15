import {takeLatest, put} from 'redux-saga/effects';
import { BOOKING_ERROR, BOOKING_PROCESS, BOOKING_SUCCESS} from '../../actions';
import {API_NUSA, filterFetch} from '../../utils/constant';

function* booking(action) {
  try {
    const result = yield filterFetch(API_NUSA + 'booking', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(action.data),
    });
    yield put({
      type: BOOKING_SUCCESS,
      result: result,
    });
  } catch (error) {
    yield put({
      type: BOOKING_ERROR,
      error: error,
    });
  }
}

export function* watchBooking() {
  yield takeLatest(BOOKING_PROCESS, booking);
}
