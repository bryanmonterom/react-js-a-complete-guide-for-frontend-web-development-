import React from "react";
import './Person.css'

const Person = (props) =>
{
    return(
        <div className="Person">
            <p onClick={props.delete}>My Name is {props.name}, i'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" name="name" value={props.name} onChange = {props.change}/>
        </div>
    )
}
export default Person