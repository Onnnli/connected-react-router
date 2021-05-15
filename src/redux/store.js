import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import reducer from './reducer';

import {routerMiddleware} from 'connected-react-router';

export const history = createBrowserHistory();

export const configureStore = (history, initState) => createStore(
	reducer(history),
	initState,
	composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);
