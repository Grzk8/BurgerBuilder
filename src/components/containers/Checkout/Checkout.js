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
    }
    render () {
        return (
            <CheckoutSummary ingredients={this.state.ingredients}/>
        )
    }
};

export default Checkout;