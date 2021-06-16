import { useState } from 'react';
import Demo from './demo';
import Anim from './anim';
import TodoList from './TodoList';
import RRTodoList from './RRTodoList';
import { Provider } from 'react-redux';
import store from './store';
function App() {
	const [num, setNum] = useState(0);
	const handleRandom = () => {
		const randomNum = Math.floor(Math.random() * 10);
		setNum(randomNum);
	};
	return (
		<div className="App">
			<button onClick={handleRandom}>{num}</button>
			<header className="App-header">Learn React</header>
			<Demo />
			<hr />
			<Anim />
			<hr />
			<div style={{ display: 'flex' }}>
				<div>
					<TodoList />
				</div>
				<div style={{ marginLeft: '20px' }}>
					<Provider store={store}>
						<RRTodoList />
						{/* <TestList /> */}
					</Provider>
				</div>
			</div>
		</div>
	);
}

export default App;
