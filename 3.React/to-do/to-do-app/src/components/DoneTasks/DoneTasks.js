import React from 'react';
import classes from './DoneTasks.module.css'

const DoneTasks = () =>
{
    return    (
    <div className = {classes.DoneTasksWrapper}>
        <div class="input-group">
        <   input type="checkbox" aria-label="Checkbox for following text input"/>
            <span>Action 1</span>
      </div>
    </div>
    )
}

export default DoneTasks;