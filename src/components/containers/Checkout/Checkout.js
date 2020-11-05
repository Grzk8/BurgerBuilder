import React, {Component} from 'react';

import CheckoutSummary from '../../Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1
        }
    };

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search);
        const ingrenients = {};
        for (let param of query.entries()) {
            ingrenients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingrenients});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render () {
        return (
            <CheckoutSummary 
            ingredients={this.state.ingredients}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}/>
        )
    }
};

export default Checkout;