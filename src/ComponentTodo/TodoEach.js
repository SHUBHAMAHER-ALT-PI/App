import React from 'react';
import "./Todo.css";

const TodoEach = ({todo, makeDone}) => {
  return (
    
    <div>

        {
            console.log(todo)
        }
        <div id="flexBox">
        <h3 id={todo.completed===true ? 'Completed' :"NotCompleted"}>{todo.title}</h3>
        <input type="checkBox" onClick={()=>{makeDone(todo.id)}}/>
        </div>
    </div>
  )
}

export default TodoEach