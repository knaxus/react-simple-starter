import React, { useState } from 'react';
import TodoView from './TodoView';
import './TodoApp.css';
function TodoApp() {
  // Declare a new state variable, which we'll call "count"
  const [todos, setTodo] = useState(['your sample todo']);

  return (
    <div>
        <input type="text" name="addtodo" id="todoInput" placeholder="Enter your todos"/>
        <button className="add-button" onClick={
            ()=>{
                console.log(document.getElementById("todoInput").value);
                setTodo([...todos, document.getElementById("todoInput").value && document.getElementById("todoInput").value]);
            }}>Add</button>
        <TodoView todos={todos} />
    </div>
  );
}

export default TodoApp;