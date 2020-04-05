import React from 'react';
import classes from './DoneTasks.module.css'

const DoneTasks = (props) =>
{
    return    (
        <div className="row">
            <div className={classes.DoneItem}>
                <div className="form-group form-check" >
                <input type="checkbox" 
                class="form-check-input" 
                id={props.task.id}  
                // onChange={() =>props.statusHandler(props.task.id)} 
                onChange={props.statusHandler.bind(this, props.task.id)} 
                checked={props.task.completed}/>
                 <label class="form-check-label" >{props.task.description}</label>
                </div>
            </div>
        </div>
    )
}

export default DoneTasks;