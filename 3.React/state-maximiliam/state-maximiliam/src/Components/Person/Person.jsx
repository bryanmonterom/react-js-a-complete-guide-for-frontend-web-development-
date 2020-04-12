import React from "react";

const Person = (props) =>
{
    console.log(props)
    return(
        <div>
            <p>My Name is {props.name}, i'm {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
}
export default Person