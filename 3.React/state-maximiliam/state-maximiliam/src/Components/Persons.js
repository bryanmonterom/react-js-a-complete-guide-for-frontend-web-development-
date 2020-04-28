import React, {Component} from 'react'
import Person from './Person/Person'
class Persons extends Component
{
    
    
    render(){return(this.props.persons.map((person,index)=>
        {
          return(
            <Person 
             name={person.name} 
             age={person.age}
             key={person.id}
             delete = {this.props.delete}
             change = {(event)=>this.props.clicked(event, person.id)}
             />
           )
        })
    )
    }
}
export default Persons