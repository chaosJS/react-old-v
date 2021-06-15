import 'antd/dist/antd.css';
import store from './store';
import { useEffect, useState } from 'react';
// import * as actionType from './store/const';
import {
	genInitTodoAction,
	genInputChangeAction,
	genAddTodoAction,
	genDelTodoAction,
} from './store/actionCreators';
import TodoUI from './TodoUI';
import axios from 'axios';

const TodoList = () => {
	const [allData, setAllData] = useState({});
	const { inputValue, todoList } = allData;
	const handleChange = (e) => {
		store.dispatch(genInputChangeAction(e.target.value));
	};
	const handleAdd = () => {
		if (inputValue) {
			store.dispatch(genAddTodoAction(inputValue));
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
		axios.get('/api/getTodos').then((res) => {
			const { data } = res.data;
			store.dispatch(genInitTodoAction(data));
		});
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
