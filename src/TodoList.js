import 'antd/dist/antd.css';
import store from './store';
import { useEffect, useState } from 'react';
// import * as actionType from './store/const';
import {
	getTodoList,
	genInputChangeAction,
	genAddTodoAction,
	genDelTodoAction,
	genSagaTodoListAction,
} from './store/actionCreators';
import TodoUI from './TodoUI';

const TodoList = () => {
	const [allData, setAllData] = useState({});
	const { inputValue, todoList } = allData;
	const handleChange = (e) => {
		store.dispatch(genInputChangeAction(e.target.value));
	};
	const handleAdd = () => {
		if (inputValue) {
			store.dispatch(genAddTodoAction());
		}
	};
	const handleDel = (index) => {
		store.dispatch(genDelTodoAction(index));
	};
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setAllData(store.getState());
		});
		return unsubscribe;
	}, []);
	useEffect(() => {
		// getTodoList 返回的是一个函数类型的action
		// 而不是对象类型的aciton
		// 由于使用redux-thunk对store.dispath做了增强，所以会调用这个函数类型的action
		// store.dispatch(getTodoList());

		// use  saga
		store.dispatch(genSagaTodoListAction());
	}, []);

	return (
		<TodoUI
			inputValue={inputValue}
			todoList={todoList}
			handleChange={handleChange}
			handleAdd={handleAdd}
			handleDel={handleDel}
		/>
	);
};
export default TodoList;
