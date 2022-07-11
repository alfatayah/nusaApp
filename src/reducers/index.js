import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {login} from '../reducers/login';

const allReducers = combineReducers({
    form: formReducer,
    login
});

export default allReducers;


