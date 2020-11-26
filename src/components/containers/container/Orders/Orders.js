import React, { Component } from 'react';
import {connect} from 'react-redux';

import Order from '../../../../components/Order/Order';
import * as actions from '../../../../store/actions/index';
import Spinner from '../../../Layout/Spinner/Spinner';

class Orders extends Component {
    
    componentDidMount() {
        this.props.onFetchOrders();
    }
    render() {
        console.log(this.props.orders)
        let orders = <Spinner />;
        if (!this.props.loading){
            orders = ( this.props.orders.map(order => (
                    <Order 
                    key={order.id}
                    ingredients={order.orderData.ingredients}
                    price={+order.orderData.price}/>
                ))
            );
        }
        return (
            <>
                {orders}
            </>
        );
    }
};

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token)) 
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Orders);