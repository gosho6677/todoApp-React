import React from "react";
import TodoItem from "./TodoItem";


function TodoList(props) {
    return <ul className="todoListItems">
    {props.todos.map(todo => <TodoItem key={todo.id} todo={todo} deleteTodo={props.deleteTodo}/>)}
    </ul>
}




export default TodoList