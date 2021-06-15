// 最好是生成action
import * as actionType from './const';
export const genInputChangeAction = (value) => {
	return {
		type: actionType.INPUT_CHANGE,
		value,
	};
};
export const genAddTodoAction = (value) => {
	return {
		type: actionType.ADD_TODO,
		value,
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
