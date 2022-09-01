import React, { useEffect, useState } from 'react'
import TodoEach from './TodoEach';

const Todo = ({change}) => {
    const[todo, setodo]= useState();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setodo(data);
        })
    },[]);
    function makeDone(id){
        
        // setodo(...todo.map(ele=>{
        //     if(ele.id==id){
        //         ele.completed=true;
        //     }
        // }));

    }

  return (
    <div>
        <div id="flexBox">
        <h1>Todos</h1>
        <h1 style={{marginLeft:"20px"}} onClick={()=>{
            change("blog")
        }}>Blog</h1>
        </div>
        {
            todo && todo.map((todo) => {
                return (
                    <TodoEach todo={todo} makeDone={makeDone}/>
                )
            })
        }
    </div>
  )
}

export default Todo;