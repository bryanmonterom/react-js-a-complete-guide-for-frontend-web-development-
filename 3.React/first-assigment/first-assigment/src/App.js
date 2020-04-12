import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";


class App extends React.Component{

  state= {
    username: 'Initial value'
  }

  userInputHandler= (event) =>
  {
    this.setState({username:event.target.value})
  }

  render()
  {
    return(
      <div>
        <UserInput 
          username={this.state.username} 
          userInputHandler={()=>this.userInputHandler}
        />
        <UserOutput 
          username={this.state.username} 
        />
        <UserOutput 
          username={"Static Name"} 
        />


      </div>
    )
  }

}
export default App;
