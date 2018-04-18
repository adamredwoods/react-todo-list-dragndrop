import React, {Component} from 'react';
import TodoInput from './TodoInput.js'
import './App.css';


const ItemList =(props) => {
	return (
		props.list.map( (i, j)=>(
			<div className='box' draggable='true' key={j} id={j}
				onDrop={props.handleDrop}
				onDragStart={props.handleStartDrag}
				onDragOver={(event) => event.preventDefault()}>
					{j+1}. {i.itemName} <button className='button' onClick={props.handleDelete}>X</button>
			</div>
		))
	)
}

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}

	updateList = (newList) => {
		this.setState({list: newList});
	}

	addItem = (item) => {
		let newItem = {itemName: item};
		this.setState({list: [...this.state.list, newItem]});
	}

	handleDrop = (event) => {
		// console.log('drop'+event.dataTransfer.getData("target"),event.target.id);
		let a = parseInt(event.target.id), b = parseInt(event.dataTransfer.getData("target"));
		if (a===b) return;
		
		let max = this.state.list.length;
		let newList = [], n=0;
		while (n<max) {
			if (n!==b) {
				if (n===a) {
					if (b<a) {
						newList.push(this.state.list[n]);
						newList.push(this.state.list[b]);
					} else {
						newList.push(this.state.list[b]);
						newList.push(this.state.list[n]);
					}
				} else {
					newList.push(this.state.list[n]);
				}
			}
			n++;
		}
		this.setState({list: newList});
	}

	handleStartDrag = (event) => {
		event.dataTransfer.setData("target", event.target.id);
	}

	handleDelete = (event) => {
		let d = parseInt(event.target.parentNode.id);
		let newList = this.state.list.filter(function(i,j) { return (j!==d); });
		this.setState({list: newList});
	}

	render() {
		return (
			<div>
				<h1>To do list</h1>
				<TodoInput addItem={this.addItem} defaultValue='' />
				<div className="box" >
					<ItemList
						list={this.state.list}
						updateList={this.updateList}
						handleDrop={this.handleDrop}
						handleStartDrag={this.handleStartDrag}
						handleDelete={this.handleDelete}
					/>
				</div>
			</div>
		)
	}
}

export default TodoList;
