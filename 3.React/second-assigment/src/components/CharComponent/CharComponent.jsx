import  React  from "react";
import './CharComponent.css'


const CharComponent = (props)=>
{
    return(
        <div className="Char">
        {props.char}
        </div>
    )
}

export default CharComponent