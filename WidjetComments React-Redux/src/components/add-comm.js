import React from 'react';

class  AddComment extends React.Component{
  constructor(props){
      super(props);
      this.state={
        userName :'',
        userText:''
      }
  }

render(){
  const {addComment} = this.props;
   return(
     <div className='field'>
       <input type='text' placeholder = 'Ваше имя'
         className ='name'
         onChange = {ev=>{
           this.setState({userName:ev.target.value})
         }}
         value = {this.state.userName}
       />
       <input type ='text' placeholder= 'Написать комментарий'
         value={this.state.userText}
         className = 'comment'
         onChange={ev=>{
           this.setState({userText:ev.target.value})
         }}
       />
       <button className='addBtn'onClick={(e)=>{
         if (this.state.userName|| this.state.userText){
           addComment(this.state.userName, this.state.userText)
           this.setState({userName:'', userText:''})
         }
       }}
       >
       Отправить
       </button>
     </div>
   )
 }
}

export default AddComment;
