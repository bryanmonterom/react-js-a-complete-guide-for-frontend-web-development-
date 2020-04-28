import React from "react";
import Aux from '../../hoc/Auxiliary'
import Button from '../UI/Button/Button'
const orderSummary = (props) =>{

        const ingredients = Object.keys(props.ingredients)
        .map(igKey=>{
            return (
                <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>:
                     {props.ingredients[igKey]}
                </li>
            )})
    return(
    <Aux>
        <h3>Your order</h3>
        <ul>{ingredients}</ul>
        <p>Continue to checkout?</p>
        <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
        <Button btnType="Danger" clicked={props.purchasaCanceled}>Cancel</Button>
        <Button btnType="Success" clicked={props.purchasaContinued}>Continue</Button>
        
    </Aux>  
    )
}

export default orderSummary