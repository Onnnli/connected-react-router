import { combineReducers } from 'redux';
import { testReducer } from '../test/testReducer';
import { connectRouter } from 'connected-react-router';

const reducer = (history) => combineReducers({
	router: connectRouter(history),
	test: testReducer,
});

export default reducer;
