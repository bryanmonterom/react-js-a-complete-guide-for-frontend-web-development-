import React, { Component } from 'react';
import cssClasses from './App.module.css';
import Persons from '../components/Persons';
import CockPit from '../components/Cockpit/Cockpit';




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
    let persons = null;
    if ( this.state.showPersons ) {
     persons = (
      <div>
        <Persons 
          persons = {this.state.persons}
          clicked = {this.nameChangedHandler}
          delete = {this.deletePersonHandler}
        />
      </div>
      );
    }
    return (
     <div className={cssClasses.App}>
        <CockPit 
          length = {this.state.persons.length}
          showPersons={this.state.showPersons} 
          toggler = {this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
