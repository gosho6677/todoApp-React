import React from "react";


const TodoItem = ({todo, deleteTodo}) => {
	const deleteHandler = e => {
		let idx = todo.id
		deleteTodo(idx - 1)
	}
    return (
		<li>
			<span className="todoID">{todo.id}.</span>
			<span className={todo.completed ? "completed" : ""}>{todo.title}</span>
			<div className="removeTodo" onClick={deleteHandler}><i className="far fa-trash-alt"></i></div>
			<div className="editTodo"><i className="fas fa-check-square"></i></div>
		</li>
	 );
}

export default TodoItem