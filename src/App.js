import logo from './logo.svg';
import './App.css';
import Blog from './Component/Blog';
import { useState } from 'react';
import Todo from './ComponentTodo/Todo';

function App() {
  const[blog , setBlog]= useState(true);
  function change(ev){
    if(ev=="blog"){
      setBlog(true);
    }else{
      setBlog(false);
    }
  }
  return (
    blog==true ?<Blog change={change}/>: <Todo change={change}/>
  );
}

export default App;
