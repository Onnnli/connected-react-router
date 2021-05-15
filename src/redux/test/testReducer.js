import { testActionsTypes } from './testActionsTypes';

const INITIAL_STATE = [];

export const testReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
	case testActionsTypes.TEST_ACTION: {
		return [payload]
	}
	default: {
		return state;
	}
	}
};
