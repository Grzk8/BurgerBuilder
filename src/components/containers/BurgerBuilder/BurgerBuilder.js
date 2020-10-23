import React, {Component} from 'react';

import Burger from '../../Burger/Burger'
import BuildControls from '../../../components/Burger/BuildControls/BuildControls'


const ingrednient_prices = {
    salad: 0.4,
    cheese: 0.5,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese:0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients).map (igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el;
        })
        this.setState({purchasable: sum > 0})
    }


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridients = {...this.state.ingredients};
        updatedIngridients[type] = updatedCount;

        const priceAddition = ingrednient_prices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngridients});
        this.updatePurchaseState(updatedIngridients);
    };
    

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <=0) {
            return;
        };
        const updatedCount = oldCount - 1;
        const updatedIngridients = {...this.state.ingredients};
        updatedIngridients[type] = updatedCount;
        const priceDeduction = ingrednient_prices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngridients});
        this.updatePurchaseState(updatedIngridients);
    }

    render (){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
            //zwraca true lub false {salad: true, meat: false, ...}
        return (
            <>
                < Burger ingredients={this.state.ingredients}/>
                < BuildControls 
                    ingrinientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}/>
            </>
        );
    }
};

export default BurgerBuilder;