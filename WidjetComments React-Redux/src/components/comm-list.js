import React from 'react';

const CommentsList = (props)=>{
  const {comments, deleteComment}=props;
  return(
    <ul>
      <h2> Комментарии</h2>
      {comments.map(comment=>{
        return (
          <li key = {comment.id}>
            <span className='nm'>{comment.name}</span>
            <span className='date'> {comment.datetime} </span>
            <span className='delete'>
              <button className='delBtn'
                    onClick={ev=>{deleteComment(comment.id)}}>
                    Удалить
              </button>
            </span>
            <div className='text'>{comment.text}</div>
          </li>
        )
      }
      )}
    </ul>

  );
}

export default CommentsList;
