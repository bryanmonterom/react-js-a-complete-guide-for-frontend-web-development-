import React from 'react' 
import Aux from '../../hoc/Auxiliary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
const Layout =  (props) =>(
    // Use a high order component as a wrapper
<Aux>
    <div >
    <Toolbar/>
        Toobar, SideDrawer, BackDrop
    </div>
    <main className={classes.Content}>
        {props.children}
    </main>
</Aux>
);

export default Layout