import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { testActions } from '../redux/test/testActions';

const First = () => {
	const dispatch = useDispatch();

	const clickHandler = () => {
		dispatch(testActions.testAction())
	}
	return (
		<div id='first'>
			FIRST
			<button onClick={clickHandler}>second btn</button>
			<Link to='/second'>link second</Link>
		</div>
	);
};

export default First;
