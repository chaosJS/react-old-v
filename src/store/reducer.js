import * as actionType from './const';
const defaultState = {
	inputValue: '',
	todoList: [],
};
const reducer = (state = defaultState, action) => {
	// can not change origin state
	switch (action.type) {
		case actionType.INIT_TODO:
			return { ...state, todoList: [...state.todoList, ...action.value] };
		case actionType.INPUT_CHANGE:
			return { ...state, inputValue: action.value };
		case actionType.ADD_TODO:
			return {
				...state,
				todoList: [...state.todoList, action.value],
				inputValue: '',
			};
		case actionType.DEL_TODO:
			const newList = [...state.todoList];
			newList.splice(action.value, 1);
			return {
				...state,
				todoList: newList,
			};
		default:
			return state;
	}
};
export default reducer;
