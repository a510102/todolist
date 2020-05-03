import React from 'react';

const InputBox = ({ onTodoTextChange, onAddtodo }) => {
  return(
    <div>
      <input type="text" placeholder="type your List here" onChange={onTodoTextChange} onKeyUp={onAddtodo} />  
    </div>
  )
}

export default InputBox;