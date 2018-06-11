import axios from 'axios';
import { FETCH_USER, ERROR_FETCH } from './types';

export const fetchUser = () => async dispatch => {
	try {
		const { data } = await axios.get('/api/current_user');

		dispatch({
			type: FETCH_USER,
			payload: data,
		});
	} catch (e) {
		dispatch({
			type: ERROR_FETCH,
			payload: e,
		});
	}
};

export const logOut = () => async dispatch => {
	try {
		await axios.get('/api/logout');

		dispatch({
			type: FETCH_USER,
			payload: false,
		});
	} catch (e) {
		dispatch({
			type: ERROR_FETCH,
			payload: e,
		});
	}
};

export const handleToken = token => async dispatch => {
	try {
		const { data } = await axios.post('/api/stripe', token);

		dispatch({
			type: FETCH_USER,
			payload: data,
		});
	} catch (e) {
		dispatch({
			type: ERROR_FETCH,
			payload: e,
		});
	}
};
