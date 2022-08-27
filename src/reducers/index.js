import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {login} from '../reducers/login';
import { register} from '../reducers/regist';
import { getProduct} from '../reducers/getProduct';
import {selectedProduct} from '../reducers/selectedProduct';
import {booking} from '../reducers/booking';
import {getReport} from '../reducers/getReport';
const allReducers = combineReducers({
    form: formReducer,
    login,
    register,
    getProduct,
    selectedProduct,
    booking,
    getReport,
});

export default allReducers;


