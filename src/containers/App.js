import React, { useState } from 'react';
import './App.css'

function Todo({todo, index, completeTodo, deleteTodo}) {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted? "line-through": ''}}>
      { todo.text }
      <div>
        <button onClick={()=>completeTodo(index)}>Complete</button>
        <button onClick={()=>deleteTodo(index)}>x</button>

      </div>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input placeholder="add Todo ..." type="text" className="input" value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'learn new React',
      isCompleted: false,
    },
    {
      text: 'learn new  Hook',
      isCompleted: false,
    },
    {
      text: 'learn new Redux HIII1',
      isCompleted: false,
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index)=>(
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;