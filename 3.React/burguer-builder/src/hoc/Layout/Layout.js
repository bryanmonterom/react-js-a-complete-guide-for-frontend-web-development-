import React from 'react' 
import Aux from '../Auxiliary/Auxiliary'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
class Layout  extends React.Component {
    // Use a high order component as a wrapper
    state={
        showSideDrawer: false
    }
    sideDrawerCloseHandler=()=>{
        this.setState({showSideDrawer: false})
    }

    toggleHandler=()=>{
        this.setState((prevState)=>{return {showSideDrawer: !prevState.showSideDrawer }})
    }
        render(){
            return(
        <Aux>
            <div >
                <Toolbar drawerToggleClicked={this.toggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                    Toobar, SideDrawer, BackDrop
            </div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    );
    }
}
export default Layout