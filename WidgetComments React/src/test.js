import React from 'react';
import ReactDom from 'react-dom';


class HelloWorld extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:'Buba'
    };
    this.changeState = this.changeState.bind(this);
  };
  changeState(){
    this.setState({
      name: 'Alex'
    })
  };

render(){
  return(
    <div>
    <h1>Привет {this.state.name}!</h1>
    <button onClick={this.changeState}>Нажать</button>
    </div>
  )
}
}

ReactDom.render(
  <HelloWorld />,
  document.querySelector('.app')
)
