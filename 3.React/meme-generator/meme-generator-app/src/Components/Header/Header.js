import React from 'react'
import classes from "./resources/Header.module.css";

const Header = () =>
 {
    return(
        <header className={classes.Header}> 
        <div className={classes.LogoWrapper}>
            <img 
                className={classes.LogoImage}  
                alt="logo"  
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
            />       
            <h1 className={classes.LogoText}>Meme Generator</h1>
        </div>
    </header>
    )
 }
export default Header