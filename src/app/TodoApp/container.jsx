import React, { useState } from 'react';
import TodoView from './component';
import './style.css';
function TodoApp() {
  // Declare a new state variable, which we'll call "count"
  const [todos, setTodo] = useState(['your sample todo']);
  const [todoInput, setTodoInput] = useState("");
  return (
    <div>
        <input type="text" name="addtodo" id="todoInput" placeholder="Enter your todos" onChange={(event)=>setTodoInput(event.target.value)}/>
        <button className="add-button" onClick={
            ()=>{
                console.log(document.getElementById("todoInput").value);
                setTodo([...todos, todoInput && todoInput]);
                document.getElementById("todoInput").value = "";
                setTodoInput("");
            }}>Add</button>
        <TodoView todos={todos} />
    </div>
  );
}

export default TodoApp;