import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth';
import surveys from './surveys';

export default combineReducers({
	auth,
	surveys,
	form,
});
