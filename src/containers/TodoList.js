import React from 'react';

const TodoList =({todos, onIsCompleted, onChangeCategory, onDeletetodo, onChangeEdit, onTodoTextChange, editTodo, todoText}) =>{
  
  return (
    <div>
      <input type="button" value="all" onClick={onChangeCategory} />
      <input type="button" value="done" onClick={onChangeCategory} />
      <input type="button" value="not done" onClick={onChangeCategory} />
      <ul>
        {
          todos.map((todo)=>{
            return todo.isEdit?
             ( <li key={todo.id}>
                <input
                  type="text" 
                  className={todo.isEdit? '':'hiden'}  
                  onChange={(e)=>onTodoTextChange(e)} 
                  onKeyUp={(e)=>editTodo(e,todo)}
                  value ={todoText}
                  defaultValue={todo.title}
                />
              </li>) :
              (<li key={todo.id}>  
                <p 
                  onClick={()=>onIsCompleted(todo)} 
                  className={todo.completed? 'done':''}
                >
                  {todo.title}
                </p> 
                <input 
                  value="edit" 
                  type="button" 
                  onClick={()=>onChangeEdit(todo)}
                />
                <input 
                  value="delete"
                  type="button"
                  onClick={()=>onDeletetodo(todo.id)}
                  todo={todo}
                />
              </li>)
          })
        }
      </ul>
    </div>
  )
}

export default TodoList;