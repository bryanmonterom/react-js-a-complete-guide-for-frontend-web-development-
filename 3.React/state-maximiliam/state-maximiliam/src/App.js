import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person';
import Radium from 'radium'
class App extends Component {
  state = {
    persons: [
      { id: 1,name: 'Max', age: 28 },
      { id: 2,name: 'Manu', age: 29 },
      { id: 3,name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = ( newName ) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = ( event,id ) => {
     
    if(!this.state.showPersons)
    {
      return alert('Cant do that')
    }
    const personIndex = this.state.persons.findIndex(p=>
    {
      return p.id === id 
    });

    const personsList = [...this.state.persons]
    personsList[personIndex].name = event.target.value

    
    this.setState( {
      persons: personsList
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  deletePersonHandler = (personIndex) =>
  {
    const personsList =[...this.state.persons];
    personsList.splice(personIndex,1)
    this.setState({persons: personsList})
    console.log(personIndex)
 
  }

  render () {
  
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid #ccc',
      padding: '8px',
      cursor: 'pointer',
      margin:'12px',
      borderRadius:'5px',
      color:'white',
      ':hover':{
        backgroundColor: 'lightGreen',
        color:'black',
      }
    };
    
    let persons = null;
    var personDrawer = this.state.persons.map((person,index)=>
      {
        return(
          <Person 
           name={person.name} 
           age={person.age}
           key={person.id}
           delete = {this.deletePersonHandler}
           change = {(event)=>this.nameChangedHandler(event, person.id)}
           />
         )
      })


    if ( this.state.showPersons ) {

      style.backgroundColor="red"
      style[':hover']={
        backgroundColor: 'lightcoral',
        color:'black'
      };
      
      persons = (
        <div>
          {personDrawer}
        </div>
      );
    }
    
    const classes = []

    if (this.state.persons.length <=2) {
      classes.push('red')
    }
    if(this.state.persons.length<=1){
      classes.push('bold')
    }
 


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>{this.state.showPersons ? "Hide Persons" : "Show Persons"}</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
