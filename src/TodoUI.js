import { Input, Button, List } from 'antd';
// 无状态组件傻瓜组件
const TodoUI = (props) => {
	const { inputValue, todoList, handleChange, handleDel, handleAdd } = props;
	return (
		<>
			<Input
				value={inputValue}
				placeholder="add todo"
				style={{ width: '300px' }}
				onChange={handleChange}
			/>
			<Button type="primary" onClick={handleAdd}>
				add
			</Button>
			<List
				style={{ width: '300px' }}
				bordered
				dataSource={todoList}
				renderItem={(item, index) => (
					<List.Item
						onClick={() => {
							handleDel(index);
						}}
					>
						{index}- {item}
					</List.Item>
				)}
			/>
		</>
	);
};
export default TodoUI;
