import React from 'react';
import './App.css';
import Forms from './Forms'

class App extends React.Component {
 
  constructor()
  {
    super()

    this.state = 
    {
      character:{},
      isLoading: false

    }
  }

  
  componentDidMount()
  {
    this.setState({isLoading:true})
    fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(data=> {
      this.setState({
          isLoading: false,
          character:data
        }
      )})


  }
 render(){

  let textContent = this.state.isLoading ? "Loading data" : this.state.character.name;
  console.log(textContent);
    return (
      <div>
    <h1>{textContent}</h1>
    <Forms/>
    </div>
  );
}
}

export default App;
