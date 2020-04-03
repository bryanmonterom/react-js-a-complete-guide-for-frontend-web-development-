import React from 'react';
import classes from './DoneTasks.module.css'

const DoneTasks = () =>
{
    return    (
        <div className="row">
            <div className={classes.DoneItem}>
                <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Pending action to do.</label>
                </div>
            </div>
        </div>
    )
}

export default DoneTasks;