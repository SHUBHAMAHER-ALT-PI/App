import React, { useEffect, useState } from 'react'
import Comment from './Comment';

const BlogMain = ({eachPage}) => {
    const[comment, setcomment]= useState();
    const [ check, setCheck]= useState(false);
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((comments) => {
            // let data=[]
           
            // console.log(data);
            setcomment(comments);
            setCheck(true)
        })

    },[])
    
  return (
    <>
   
    <div>
        <h1>{eachPage.title}</h1>
        <img src="" alt=""></img>
        <div>
        {eachPage.body}
        </div>


    </div>
    {
        check ==true ?comment.filter(data=>data.id==eachPage.id).map((element)=>{
            return <Comment comment={element}/>
        }): null
    }
    </>
  )
}

export default BlogMain