import React from 'react';
import {connect} from 'react-redux';

import CommentsList from '../components/comm-list';
import AddComment from '../components/add-comm';

import {addComment, deleteComment} from '../actions'

let App = (props)=>{
  const{
    comments, addComment, deleteComment
  } = props;

  let arr = [...props.comments]
  const commentsLocal = JSON.stringify(arr);
  localStorage.setItem('comments', commentsLocal);
  
  return(
    <div>
      <CommentsList comments={comments} deleteComment={deleteComment}/>
      <AddComment addComment={addComment}/>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return{
    comments: state
}}
const mapDispatchToProps=(dispatch)=>{
  return{
    addComment:(name, text)=>dispatch(addComment(name, text)),
    deleteComment:(id)=>dispatch(deleteComment(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
