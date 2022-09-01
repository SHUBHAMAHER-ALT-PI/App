import React, { useEffect, useState } from 'react';
import "./Blog.css";
import BlogMain from './ChildComponent/BlogMain';
import EachBlog from './ChildComponent/EachBlog';

const Blog = ({change}) => {
  let [blog, setBlog]= useState({});
  let [a,seta]=useState(false);
  let [eachblog , setEachBlog]= useState();
  let[eachPage, SetEachPage]=useState();
  let [comment, setComment]= useState();
useEffect(() => { 
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts);
    setBlog(posts);
    seta(true);
  })
 }, []);


 function viewEachBlog(id){
  
   
   
   setEachBlog(id);
   console.log(id);
   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   .then((res) => res.json())
   .then((post) => {
     SetEachPage(post);
     seta(false);
   })
   fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((comments) => {
            // let data=[]
           
            // console.log(data);
            setComment(comments);
        })

 }

  return (
    <div className="container">
    <div className="header">
      <h1 className="logo">Blog</h1>
      <h1 onClick={()=>{
        change("todo");
      }}>TO do</h1>
      <form>
        <input type="text" placeholder="Search image" />
        <ion-icon name="search"></ion-icon>
      </form>
    </div>
    <div className="gallery">
    {
      a==true ? blog.map((data,index)=>{
        return (
          <EachBlog data={data} viewEachBlog={viewEachBlog}/>
        )
      }):eachPage && <BlogMain eachPage={eachPage}/>
    }
    </div>
    <a>
      <button className="load-more" data-img="curated">More</button>
    </a>
  </div>
  )
}

export default Blog;