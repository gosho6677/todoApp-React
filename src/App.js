import './App.css';
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
// import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodosCount from "./components/TodosCount";
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      todos:[]
    }
    
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(result => {
        this.setState({
          todos: result
        })
      }
      )
  }
  
  addTodo(todo) {
    let newTodo = {
      id: this.state.todos[this.state.todos.length - 1].id + 1, 
      title: todo, 
      completed: false
    }
    let newTodos = [...this.state.todos, newTodo]
    this.setState({todos: newTodos})
  }
  
  deleteTodo(idx) {
    const todos = this.state.todos.filter(todo=>todo.id !== idx);
    this.setState({todos});
  }
  
  toggleComplete = (todoId)=>{
    const todos = this.state.todos.map(
      todo=>todo.id===todoId ? {...todo,completed:!todo.completed} : {...todo}
      );
      this.setState({todos});
  }
    
    render() {
      return (
        <div className="page">
        <Header />
        <main className="todoApp">
        <AddTodo addTodo={this.addTodo}/>
        <TodoList 
        todos={this.state.todos} 
        deleteTodo={this.deleteTodo}
        toggleComplete={this.toggleComplete}
        />
        <TodosCount count={this.state.todos.length}/>
        </main>
        </div>
        );
      }
    }
    
    export default App;
    