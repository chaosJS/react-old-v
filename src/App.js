import { useState } from 'react';
import Demo from './demo';
import Anim from './anim';
import TodoList from './TodoList';
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
			<TodoList />
		</div>
	);
}

export default App;
