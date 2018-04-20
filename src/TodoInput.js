import React, {Component} from 'react';

class TodoInput extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	componentDidMount = () => {
		this.inputRef.current.focus();
	}

	handleInput =(e) => {
		e.preventDefault();
		if (this.inputRef.current.value) this.props.addItem(this.inputRef.current.value);
		// console.log(this.inputRef.current.value);
		this.inputRef.current.value = "";
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleInput}>
					<input type='text' className='text-input' ref={this.inputRef}/>
				</form>
			</div>
		)
	}
}

export default TodoInput;
