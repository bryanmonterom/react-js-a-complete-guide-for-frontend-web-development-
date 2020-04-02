import React from 'react';
import classes from './PendingTasks.module.css'

const PendingTasks = () =>
{
    return    (
    <div className = {classes.PendingTasksWrapper}>
        <div class="input-group">
            < input type="checkbox" className={classes.CheckBoxItem} aria-label="Checkbox for following text input"/>
            <span className={classes.TaskPendingItem}>Action 1</span>
      </div>
      <div class="input-group">
            < input type="checkbox" className={classes.CheckBoxItem} aria-label="Checkbox for following text input"/>
            <span className={classes.TaskPendingItem}>Action 1</span>
      </div>
      <div class="input-group">
            < input type="checkbox" className={classes.CheckBoxItem} aria-label="Checkbox for following text input"/>
            <span className={classes.TaskPendingItem}>Action 1</span>
      </div>
      <div class="input-group">
            < input type="checkbox" className={classes.CheckBoxItem} aria-label="Checkbox for following text input"/>
            <span className={classes.TaskPendingItem}>Action 1</span>
      </div>
      <div class="icon">
        <i class="fas fa-heartbeat"></i>
      </div>
    </div>
    )
}

export default PendingTasks;