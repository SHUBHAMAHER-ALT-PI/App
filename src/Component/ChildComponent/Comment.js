import React from 'react'

const Comment = ({comment}) => {
  return (
    <div><h2 >Comment</h2>
        {console.log(comment,"sd")}
        <h4>{comment.body}</h4>
        <div>Name : {comment.name}</div>
        <div>Email : {comment.email}</div>
    </div>
  )
}

export default Comment