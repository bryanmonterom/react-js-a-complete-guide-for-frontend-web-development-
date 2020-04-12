import React  from "react";
const UserInput = (props) =>
{
    return(
        <input type="text" style={style} value={props.username} onChange={props.userInputHandler()} />
    )
}

const style =
 {
     border: '2px solid lightblue',
     width:'150px',
     height:'20px',
     margin:'16px'
 }
export default UserInput