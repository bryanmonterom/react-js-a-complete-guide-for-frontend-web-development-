import  React  from "react";
import classes from './TopBar.module.css'

const TopBar = () =>
{
    return(
        <nav className = {classes.TopBar}>
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="" alt="amazon logo"/>
      </nav>
    )
}

export default TopBar;