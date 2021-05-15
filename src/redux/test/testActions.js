import { testActionsTypes } from './testActionsTypes';
import { push } from 'connected-react-router'

export const testActions = {
	testAction: () => {
		return async (dispatch) => {
			try {
				console.log('try');
				dispatch(testActions.testActionSuccess(1));
				dispatch(push('/second'))
			} catch (e) {
				console.log(e);
			}
		};
	},
	testActionSuccess: (number) => ({
		payload: number,
		type: testActionsTypes.TEST_ACTION,
	}),
};
