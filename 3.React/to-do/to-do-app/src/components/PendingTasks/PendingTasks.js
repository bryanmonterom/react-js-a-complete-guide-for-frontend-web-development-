import React from 'react';
import classes from './PendingTasks.module.css'

const PendingTasks = (props) =>
{
    return    (
        <div className="row">
            <div className={classes.PendingItem}>
                <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id={props.task.id} onChange={() =>props.statusHandler(props.task.id)} checked={props.task.completed}/>
                <label class="form-check-label" >{props.task.description}</label>
                </div>

            </div>
            <button className="btn btn-danger btn-sm" onClick= {props.remove.bind(this, props.task.id)} >X</button>

        </div>
    )
}

export default PendingTasks;