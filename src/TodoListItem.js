import React from 'react';

const TodoListItem =(props) => {
	return (
		props.list.map( (i, j)=>(
			<div className='box'
				draggable='true'
				key={j}
				id={j}
				onDrop={props.handleDrop}
				onDragStart={props.handleStartDrag}
				onDragOver={(event) => event.preventDefault()}>
					{j+1}. {i.itemName} <button className='button' onClick={props.handleDelete}>X</button>
			</div>
		))
	)
}

export default TodoListItem;
