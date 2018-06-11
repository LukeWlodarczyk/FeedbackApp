import { FETCH_USER, ERROR_FETCH } from '../actions/types';

const initialState = {
	user: null,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER:
			return {
				...state,
				user: action.payload || false,
			};
		case ERROR_FETCH:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
