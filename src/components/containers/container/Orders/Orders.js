import React, { Component } from 'react';

import Order from '../../../../components/Order/Order';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        fetch('http://localhost:3000/orders')
        .then(response => response.json())
        .then (resp => {
            console.log(resp)
            const fetchedOrders = [];
            for (let key in resp) {
                fetchedOrders.push({
                    ...resp[key], id: key
                })
            }
            this.setState({loading: false});
        })
        .catch(err => {
            this.setState({loading: false});
        })
    }
    render() {
        return(
            <>
                {this.state.orders.map(order => (
                    <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={+order.price}/>
                ))}
            </>

        );
    }
};

export default Orders;