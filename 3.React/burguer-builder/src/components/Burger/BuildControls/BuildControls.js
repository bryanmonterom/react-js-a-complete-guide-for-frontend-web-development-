import  React  from "react";
import classes from '../BuildControls/BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl' 
    
const controls = [
    { label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'}
];

const buildControls = (props) =>(
<div className={classes.BuildControls}>
    <p><strong>Current price: ${props.price}</strong></p>
    {controls.map(item => 
        (<BuildControl
            key={item.label } 
            addIngredient={()=>props.addIngredient(item.type)} 
            removeIngredient={()=>props.removeIngredient(item.type)} 
            label={item.label}
            type= {item.type}
            disabled = {props.disabled[item.type]}/>
    ))}
    <button 
        disabled={!props.purchasable} 
        className={classes.OrderButton}
        onClick={props.purchasing}>
        ORDER NOW</button>
</div>

);

export default buildControls