import React from 'react';
import ReactDom from 'react-dom';


class WidjetComments extends React.Component{
  constructor(){
    super();
    this.state = {
      text:JSON.parse(localStorage.getItem('text')) || [],
      newText:'',
      newName:'',
    };
    this.AddText = this.AddText.bind(this);
    this.DeleteComment = this.DeleteComment.bind(this);
  };

  AddText(){
    let {text} = this.state;
    let {newText} = this.state;
    let {newName} = this.state;
    if (!newName.trim() || !newText.trim()){
      return false
    }
    else{
      text.push({
      name: this.state.newName,
      txt: this.state.newText,
      datetime: new Date().toLocaleString()
    })
    this.setState({
      text,
      newText:'',
      newName:''
    })}

  }
  DeleteComment(idx){
    let {text} = this.state;
    text.splice(idx,1);
    this.setState({text:text})
  }
render(){
  localStorage.setItem('text', JSON.stringify(this.state.text))
  return(
    <div>
      <ul>
        <h2> Комментарии</h2>
        {this.state.text.map((ev,i)=>{
          return (
            <li key = {i}>
              <span className='nm'>{ev.name}</span>
              <span className='date'> {ev.datetime} </span>
              <span className='delete'>
                <button className='delBtn'
                      onClick={ev=>{this.DeleteComment(i)}}>
                      Удалить
                </button>
              </span>
              <div className='text'>{ev.txt}</div>
            </li>
          )
        }
        )}
      </ul>
      <div className='field'>
        <input type='text' placeholder = 'Ваше имя'
          className ='name'
          value = {this.state.newName}
          onChange = {ev=>{
            this.setState({newName:ev.target.value})
          }}
        />
        <input type ='text' placeholder= 'Написать комментарий'
          className = 'comment'
          value = {this.state.newText}
          onChange={ev=>{
            this.setState({newText:ev.target.value})
          }}
        />
        <button className='addBtn'onClick={this.AddText}>
        Отправить
        </button>
      </div>

    </div>
  )
}
}

ReactDom.render(
  <WidjetComments />,
  document.querySelector('.app')
)
