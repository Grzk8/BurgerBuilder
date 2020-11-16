import React, {Component} from 'react';
import { connect } from 'react-redux';

import Burger from '../../Burger/Burger';
import BuildControls from '../../../components/Burger/BuildControls/BuildControls';
import Modal from '../../Layout/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import * as actionTypes from '../../../store/actions/actionTypes';


class BurgerBuilder extends Component {
    state = {
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients).map (igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el;
        })
        return sum > 0;
    }


    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => { 
        this.props.history.push('/checkout'

        );  
    
    }

    render (){
        const disabledInfo = {
            ...this.props.ings
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
                    ingredients={this.props.ings}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.props.price}/>
                </Modal>
                < Burger ingredients={this.props.ings}/>
                < BuildControls 
                    ingrinientAdded = {this.props.onIngridientAdded}
                    ingredientRemoved = {this.props.onIngridientRemoved}
                    disabled = {disabledInfo}
                    price = {this.props.price}
                    purchasable = {this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseHandler}/>
            </>
        );
    }
};

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngridientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngridientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }    
}
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);