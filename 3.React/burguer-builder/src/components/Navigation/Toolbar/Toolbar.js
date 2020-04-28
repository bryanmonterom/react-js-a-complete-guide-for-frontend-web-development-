import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
const toolBar = ()=>(
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo/>
        <ul>
            ...
        </ul>

    </header>
);
export default toolBar;