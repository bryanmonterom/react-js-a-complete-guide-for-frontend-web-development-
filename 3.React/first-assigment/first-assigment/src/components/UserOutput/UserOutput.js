import React  from "react";
import './UserOutput.css';

const UserOutput = (props) =>
{
    return(
        <div className="Card">
            <div className= "Card-Content">
                <p>Username: {props.username}</p>
                <p>This is a second paragraph</p>
            </div>
        </div>
    )
}

export default UserOutput