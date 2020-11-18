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
            this.setState({loading: false, orders: fetchedOrders});
        })
        .catch(err => {
            this.setState({loading: false});
        })
    }
    render() {
        console.log(this.state.orders)
        return(
            <>
                {this.state.orders.map(order => (
                    <Order 
                    key={order.id}
                    ingredients={order.orderData.ingredients}
                    price={+order.orderData.price}/>
                ))}
            </>

        );
    }
};

export default Orders;