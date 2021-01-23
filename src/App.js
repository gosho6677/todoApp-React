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
      todos:[
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": true
        },
        {
          "userId": 1,
          "id": 2,
          "title": "fugiat veniam minus",
          "completed": false
        },
        
      ]}

      this.addTodo = this.addTodo.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodo(todo) {
      // let newOne = this.state.todos.push({
      //   id: this.state.todos.length+1, 
      //   title: todo, 
      //   completed: false
      // });
      
      let newTodo = {
        id: this.state.todos.length+1, 
        title: todo, 
        completed: false
      }
      let newTodos = [...this.state.todos, newTodo]
      this.setState({todos: newTodos})
      console.dir(this.state.todos)
    }

    deleteTodo(idx) {
      const todos = [...this.state.todos];
      todos.splice(idx, 1);
      this.setState({todos});
    }

    render() {
      return (
        <div className="page">
          <Header />
          <main className="todoApp">
          <AddTodo addTodo={this.addTodo}/>
          <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <TodosCount count={this.state.todos.length}/>
          </main>
        </div>
        );
      }
    }
    
    export default App;
    