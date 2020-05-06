import  React from "react";
import classes from './Modal.module.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { render } from "@testing-library/react";

class Modal extends React.Component{

    componentDidUpdate(){
        console.log("Modal updated")
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !==this.props.show
    }
  render(){
      return(
  <Aux>
    <Backdrop show={this.props.show} clicked={this.props.modalClosed}>
       <div className={classes.Modal} style={
           {
               transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
               opacity: this.props.show ? '1':'0'
           }}>
            {this.props.children}
        </div>
        </Backdrop>
    </Aux>
      )
}
}


export default Modal;