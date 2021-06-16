import { connect } from 'react-redux';
import * as actionType from './store/const';

const mapState = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.todoList,
	};
};
const mapDispatch = (dispatch) => {
	return {
		handleInputChange(e) {
			dispatch({
				type: actionType.INPUT_CHANGE,
				value: e.target.value,
			});
		},
		handleAdd() {
			dispatch({
				type: actionType.ADD_TODO,
			});
		},
		handleDel(index) {
			dispatch({
				type: actionType.DEL_TODO,
				index,
			});
		},
	};
};
const RRTodoList = (props) => {
	const { inputValue, list, handleInputChange, handleAdd, handleDel } = props;
	return (
		<>
			<div>react-redux todo list</div>
			<p>{inputValue}</p>
			<input value={inputValue} onChange={handleInputChange} />
			<button onClick={handleAdd}>add</button>
			<ul>
				{list.map((todo, index) => (
					<li
						key={index}
						onClick={() => {
							handleDel(index);
						}}
					>
						{todo}
					</li>
				))}
			</ul>
		</>
	);
};

// connect comp to store
export default connect(mapState, mapDispatch)(RRTodoList);
