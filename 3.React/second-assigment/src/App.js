import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';


class App extends Component {
  
  state =
  {
    text: ''
  }
  
  textHandlerChange=(event)=>
  {
    this.setState({text: event.target.value})
  }


  render(){

  let charList = this.state.text.split('').map((char,key)=>
  {
    return(<CharComponent
      key= {key}
      char={char}
    />
    )
  })
  return (
    <div>
      <input style={style}type="text" onChange={this.textHandlerChange} value={this.state.text}/>
      <ValidationComponent length = {this.state.text.length}/>
      {charList}
    </div>
  );
}
}
const style=
{
    boxShadow:"2px 5px #eee",
    border:"1px solid #ccc",
    height:'30px',
    width:'150px'
}

export default App;
