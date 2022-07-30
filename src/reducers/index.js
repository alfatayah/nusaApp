import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {login} from '../reducers/login';
import { register} from '../reducers/regist';

const allReducers = combineReducers({
    form: formReducer,
    login,
    register
});

export default allReducers;


