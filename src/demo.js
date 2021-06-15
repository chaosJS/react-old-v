import React, { Component } from 'react';
class Demo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
		};
	}
	UNSAFE_componentWillReceiveProps(a, b, c) {
		console.log('componentWillReceiveProps:', a, b, c);
	}
	UNSAFE_componentWillMount() {
		console.log('will mount');
	}
	componentDidMount() {
		console.log('did mount');
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('should update:', nextProps, nextState);
		// 父组件改变randomNum值，子组件是不需要更新的
		if (nextState.inputValue !== this.state.inputValue) {
			return true;
		} else {
			return false;
		}
	}
	UNSAFE_componentWillUpdate() {
		console.log('componentWillUpdate:');
	}
	componentDidUpdate() {
		console.log('componentDidUpdate:');
	}
	componentWillUnmount() {
		console.log('componentWillUnmount:');
	}
	handleInputChange = (e) => {
		this.setState({ inputValue: e.target.value });
	};
	render() {
		return (
			<>
				<p>demo</p>
				<input
					onChange={this.handleInputChange}
					value={this.state.inputValue}
				></input>
			</>
		);
	}
}
export default Demo;
