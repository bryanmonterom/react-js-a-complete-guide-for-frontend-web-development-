import  React  from "react";

const ValidationComponent = (props)=>
{
    console.log(props)
    return(
        <div>
        {props.length < 5 ? "Text is too short": "Text Long enough" }
        <h2></h2>
        </div>
    )
}



export default ValidationComponent