import React, {Component} from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'

const INGREDIENTS_PRICES = 
{
    salad: 0.5,
    bacon:0.4,
    cheese:0.3,
    meat:0.6,   
}
    
class BurgerBuilder extends Component{

    state= {
        ingredients : {
            salad: 0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice:4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients)=>{
        
        const sum =  Object.keys(ingredients)
            .map(igKey=>{
                return ingredients[igKey];
            })
            .reduce((sum, el)=>{
                return sum + el
            },0);
            this.setState({purchasable: sum > 0})
    }

    addIngredientsHandler = (type)=>{
        const oldIngredientQty = this.state.ingredients[type];
        const newIngredientQty = oldIngredientQty + 1;
        const updatedIngredient= 
        {...this.state.ingredients};
        updatedIngredient[type] = newIngredientQty;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldTotalPrice = this.state.totalPrice
        const newTotalPrice = oldTotalPrice + priceAddition

        this.setState({totalPrice : newTotalPrice, ingredients :updatedIngredient})
        this.updatePurchaseState(updatedIngredient)
    }

    removeIngredientsHandler = (type)=>{
        const oldIngredientQty = this.state.ingredients[type];
        if(oldIngredientQty <=0){
            return;
        }
        const newIngredientQty = oldIngredientQty - 1;
        const updatedIngredient= 
        {...this.state.ingredients};
        updatedIngredient[type] = newIngredientQty;
        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldTotalPrice = this.state.totalPrice
        const newTotalPrice = oldTotalPrice - priceDeduction

        this.setState({totalPrice : newTotalPrice, ingredients :updatedIngredient})
        this.updatePurchaseState(updatedIngredient)

    }

    purchaseHandler =()=>
    {
        this.setState((prevState)=> { return {purchasing: !prevState.purchasing}})
        // this.setState({purchasing: true})

    }

    purchaseCancelHandler = ()=>{
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = ()=>{
        alert('You will continue')
    }

    render(){
        const disabledInfo={

            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0 
        }
        return(
            <Aux>
            <Modal show={this.state.purchasing} modalClosed= {this.purchaseCancelHandler}>
                <OrderSummary ingredients = {this.state.ingredients}
                                purchaseCanceled ={this.purchaseCancelHandler}
                                purchasaContinued= {this.purchaseContinueHandler}
                                price={this.state.totalPrice}
                />
            </Modal>
                <Burger ingredients = {this.state.ingredients}/>   
                <BuildControls 
                    addIngredient={this.addIngredientsHandler}
                    removeIngredient={this.removeIngredientsHandler}
                    disabled = {disabledInfo}
                    price ={this.state.totalPrice.toFixed(2)}
                    purchasable = {this.state.purchasable}
                    purchasing = {this.purchaseHandler}
                />   
                         
            </Aux>
        );
    }
}

export default BurgerBuilder