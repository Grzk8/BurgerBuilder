import React, {Component} from 'react';
import { connect } from 'react-redux';
import Spinner from '../../Layout/Spinner/Spinner';
import Burger from '../../Burger/Burger';
import BuildControls from '../../../components/Burger/BuildControls/BuildControls';
import Modal from '../../Layout/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import * as actions from '../../../store/actions/index';
import Axios from 'axios';



class BurgerBuilder extends Component {
    state = {
        purchasing: false
    }

    componentDidMount () {
        this.props.onInitIngredients();
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
        this.props.onInitPurchase(); 
        this.props.history.push('/checkout');
    }

    render (){
        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
            //zwraca true lub false {salad: true, meat: false, ...}
            let orderSummary = null;
            let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
            
            if (this.props.ings) {
                burger = (
                    <>
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
                    orderSummary = (
                        <OrderSummary 
                        ingredients={this.props.ings}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.props.price}/>
                    )
            };

        return (
            <>
                <Modal 
                show={this.state.purchasing}
                modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </>
        );
    }
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,   // mamy dwa reduktory więc wybieramy właściwy -> state.burgerBuilder
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngridientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngridientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }    
}
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder, Axios);