import {takeLatest, put} from 'redux-saga/effects';
import { GET_PRODUCT_ERROR, GET_PRODUCT_PROCESS, GET_PRODUCT_SUCCESS} from '../../actions';
import {API_NUSA, filterFetch, filterFetchGet} from '../../utils/constant';

function* getProduct() {
  try {
    const result = yield filterFetch(API_NUSA + 'product', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    yield put({
      type: GET_PRODUCT_SUCCESS,
      result: result,
    });
  } catch (error) {
    yield put({
      type: GET_PRODUCT_ERROR,
      error: error,
    });
  }
}

export function* watchGetProduct() {
  yield takeLatest(GET_PRODUCT_PROCESS, getProduct);
}
