import React from "react"
import cssClasses from './Cockpit.module.css';
const CockPit = (props) =>{

    const classes = []
    let btnClass = [cssClasses.button]


    console.log(btnClass)

    if (props.length <=2) {
      classes.push(cssClasses.red)
    }
    if(props.length<=1){
      classes.push(cssClasses.bold)
    }

  
    if ( props.showPersons ) {

    btnClass.push(cssClasses.redbtn)
    }

    return(

        <div>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className={btnClass.join(' ')}showPersons={props.showPersons}
          onClick={props.toggler}>{props.showPersons ? "Hide Persons" : "Show Persons"}</button>
        </div>
    )
}

export default CockPit