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


const style=
{
    boxShadow:"2px 5px #eee",
    border:"1px solid #ccc"
}
export default ValidationComponent