import React from 'react'

const EachBlog = ({data, viewEachBlog}) => {
  return (
    <div className="itm" onClick={()=>{
        viewEachBlog(data.id);
    }}>
        
    <a href={data.src}>
            <img src="" alt=""/>
            <h3>{data.title}</h3>
            </a>
    </div>
  )
}

export default EachBlog;