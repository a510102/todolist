import React, { Component } from 'react';

import InputBox from './InputBox';
import TodoList from './TodoList';
import Pagination from './Pagination';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoText: '',
      todos:[],
      category: 'all',
    }
  }

  onTodoTextChange = (event) => {
    this.setState({todoText:event.target.value})
    
  }

  onChangeCategory=(event)=>{
    this.setState({category: event.target.value});
  }

  onIsCompleted = (todo) => {
    todo.completed = !todo.completed;
    let replaceIndex = (this.state.todos.length) - 1 - todo.id;
    // 先把已改變的todo取代原本為改變的todo
    this.state.todos.splice(replaceIndex, 1, todo);
    // 然後再更新state
    this.setState({todos:this.state.todos})

  }

  onChangeEdit = (todo) => {
    todo.isEdit = !todo.isEdit;
    let replaceIndex = (this.state.todos.length) - 1 - todo.id;
    // 先把已改變的todo取代原本為改變的todo
    this.state.todos.splice(replaceIndex, 1, todo);
    // 然後再更新state
    this.setState({todos:this.state.todos})
  }

  onAddtodo = (event) => {
    if(this.state.todoText){
      if(event.keyCode === 13){
        let newId = this.state.todos.length
        let newtodo = {
          id: newId,
          title: this.state.todoText,
          completed:false,
          isEdit: false,
        }
        this.setState(state => {
          return {todos:[newtodo, ...state.todos],todoText:''}
        })
        event.target.value = '';
        console.log(this.state.todos)
      }
    }
  }

  onDeletetodo = (id) =>{
    let replaceIndex = (this.state.todos.length) - 1 - id;
    this.state.todos.splice(replaceIndex, 1)
    this.setState({todos: this.state.todos})
  }

 editTodo =(e,todo) =>{
  if(e.keyCode === 13){
    if(this.state.todoText){
      todo.title = this.state.todoText;
      todo.isEdit =  !todo.isEdit;
      let replaceIndex = (this.state.todos.length) - 1 - todo.id;
      // 先把已改變的todo取代原本為改變的todo
      this.state.todos.splice(replaceIndex, 1, todo);
      // 然後再更新state
      this.setState({todos:this.state.todos})
      e.target.value = ''
    }else {
      todo.isEdit =  !todo.isEdit;
      let replaceIndex = (this.state.todos.length) - 1 - todo.id;
      // 先把已改變的todo取代原本為改變的todo
      this.state.todos.splice(replaceIndex, 1, todo);
      // 然後再更新state
      this.setState({todos:this.state.todos})
    }
  }
 }

 


  render(){
    const filtertodo = this.state.todos.filter(todo => {
      switch(this.state.category){
        case 'not done':
          return todo.completed === false;
        case 'done':
          return todo.completed === true;
        default:
          return todo;
      }
    })
    return (
      <div>
        <h1>TodoList</h1>
        <InputBox 
          onTodoTextChange={this.onTodoTextChange}
          onAddtodo={this.onAddtodo}
          />
        <TodoList 
          todos = {filtertodo}
          onIsCompleted={this.onIsCompleted} 
          onChangeCategory={this.onChangeCategory}
          onDeletetodo= {this.onDeletetodo}
          onChangeEdit={this.onChangeEdit}
          onTodoTextChange={this.onTodoTextChange}
          editTodo={this.editTodo}
          />
        <Pagination />
      </div>
    )
  }
}

export default App;
