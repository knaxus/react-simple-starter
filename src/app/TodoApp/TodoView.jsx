import React from 'react';
import './TodoApp.css';

function TodoView({todos}){
    return (
        <div className="todoView-container">
        <table id="todo-table">

        {
            todos.map((todo, index)=><tr><th>{todo}</th></tr>)
        }
        </table>
        </div>
    )
}

export default TodoView;