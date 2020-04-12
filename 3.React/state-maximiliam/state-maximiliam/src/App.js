import React ,{useState}from 'react';
import './App.css';
import Person from './Components/Person/Person'

const  App= ()=>   {

  const [Persons, setPersons] = useState({
    persons:[ 
  {name: 'Bryan', age:22, hobbie: 'Gaming'},
  {name: 'Max', age:19, hobbie:'Development'},
  {name: 'Peter', age:20, hobbie:'Netflix'},
  ]})
 

const switchNamesHandler = () =>
{
  setPersons(
    { persons:[ 
      {name: 'Bryan A', age:43, hobbie: 'Gaming'},
      {name: 'Maxi', age:24, hobbie:'Development'},
      {name: 'Peter Parler', age:19, hobbie:'Netflix'}
      ]   })
}
    let personDrawer =  Persons.persons.map(item=>
      {
        return(
          <Person name={item.name} age={item.age*2}>{item.hobbie}</Person>
        )
      })
    
  
    return (
    <div className="App">
    <h1>Persons</h1>
    <button onClick={switchNamesHandler}></button>
      {personDrawer}
    </div>
  );
}

export default App;
const state =
  {
    person :[
      {name: 'Bryan', age:22, hobbie: 'Gaming'},
      {name: 'Max', age:19, hobbie:'Development'},
      {name: 'Peter', age:20, hobbie:'Netflix'},

    ]
  }
