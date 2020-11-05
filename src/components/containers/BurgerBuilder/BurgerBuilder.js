import React, {Component} from 'react';

import Burger from '../../Burger/Burger';
import BuildControls from '../../../components/Burger/BuildControls/BuildControls';
import Modal from '../../Layout/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary'


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
        purchasable: false,
        purchasing: false
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

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        //alert ('You continue');
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Tester',
        //         address: {
        //             street: 'Teststreet 1',
        //             zipCode: '12345'
        //         },
        //         email: 'test@test.com'
        //     }
       
        // }
        // fetch('https://burgerbuilder-166a2.firebaseio.com/orders',{
        //     method: 'POST', 
        //     body: JSON.stringify({order})})
        // .then(resp => resp.json())
        // .then(resp => 
        //     console.log(resp))
        // .catch(error => console.log(error));
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        };
        const queryString = queryParams.join('&');  
        this.props.history.push({
            pathname: '/checkout/',
            search: '?' + queryString
        }
        );  
    
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
                <Modal 
                show={this.state.purchasing}
                modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.state.totalPrice}/>
                </Modal>
                < Burger ingredients={this.state.ingredients}/>
                < BuildControls 
                    ingrinientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered={this.purchaseHandler}/>
            </>
        );
    }
};

export default BurgerBuilder;