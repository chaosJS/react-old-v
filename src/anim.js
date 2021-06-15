import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';
const Anim = (props) => {
	const [show, setShow] = useState(true);
	const [list, setList] = useState([]);
	return (
		<>
			<div style={{ display: 'flex' }}>
				<div style={{ marginRight: '20px' }}>
					<CSSTransition
						in={show}
						timeout={2000}
						classNames="fade"
						unmountOnExit
						onEntered={(el) => {
							el.style.color = 'blue';
						}}
					>
						<p>with css transition</p>
					</CSSTransition>
					<button
						onClick={() => {
							setShow(!show);
						}}
					>
						toggle
					</button>
					<div className={show ? 'show' : 'hide'}>123</div>
				</div>

				<div>
					<button
						onClick={() => {
							setList([...list, 'item']);
						}}
					>
						add
					</button>
					<TransitionGroup>
						{list.map((item, index) => (
							<CSSTransition
								timeout={2000}
								classNames="fade"
								unmountOnExit
								onEntered={(el) => {
									el.style.color = 'blue';
								}}
								key={index}
							>
								<div>{item}</div>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
			</div>
		</>
	);
};
export default Anim;
