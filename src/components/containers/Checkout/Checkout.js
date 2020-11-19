import React, {Component} from 'react';
import { Redirect, Route } from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render () {
        let summary = <Redirect to="/BurgerBuilder"/>
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/BurgerBuilder" /> : null
            summary = (
                <>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}/>
                    <Route 
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </> );
        };
        return summary
    };
};


const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,    // mamy dwa reduktory więc wybieramy właściwy -> state.burgerBuilder
        purchased: state.order.purchased
    }
};

export default connect(mapStateToProps)(Checkout);