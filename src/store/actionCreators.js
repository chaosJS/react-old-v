// 最好是生成action
import * as actionType from './const';
import axios from 'axios';

export const genInputChangeAction = (value) => {
	return {
		type: actionType.INPUT_CHANGE,
		value,
	};
};
export const genAddTodoAction = () => {
	return {
		type: actionType.ADD_TODO,
	};
};
export const genDelTodoAction = (value) => {
	return {
		type: actionType.DEL_TODO,
		value,
	};
};

export const genInitTodoAction = (value) => {
	return {
		type: actionType.INIT_TODO,
		value,
	};
};

export const getTodoList = () => {
	// 加了redux-thunk的middleware之后
	// action可以 return 一个函数,这个函数的参数是store的dispatch方法
	return (dispath) => {
		axios.get('/api/getTodos').then((res) => {
			const { data } = res.data;
			dispath(genInitTodoAction(data));
		});
	};
};
export const genSagaTodoListAction = () => {
	// 返回一个对象
	return {
		type: actionType.INIT_SAGA_TODO,
	};
};
