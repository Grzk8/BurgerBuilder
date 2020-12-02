import * as actionsType from './actionTypes';
import axios from 'axios';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionsType.PURCHASE_BURGER_SUCCES,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionsType.PUTCHASE_BURGER_FAIL,
        error: error
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionsType.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = ( orderData, token ) => {
    return dispatch => {
        dispatch( purchaseBurgerStart() );
        axios.post( 'https://burgerbuilder-166a2.firebaseio.com/orders.json?auth=' + token, orderData )
            .then( response => {
                console.log( response.data );
                dispatch( purchaseBurgerSuccess( response.data.name, orderData ) );
            } )
            .catch( error => {
                dispatch( purchaseBurgerFail( error ) );
            } );
    };
};

export const purchaseInit = () => {
    return {
        type: actionsType.PURCHASE_INIT
    };
};

export const fetchOrderStart = () => {
    return {
        type: actionsType.FETCH_ORDERS_START
    };
};

export const fetchOrderSucces= (orders) => {
    return {
        type: actionsType.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrderFail= (error) => {
    return {
        type: actionsType.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrderStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get( 'https://burgerbuilder-166a2.firebaseio.com/orders.json?auth=' + queryParams )
            .then( res => {
                const fetchedOrders = [];
                for ( let key in res.data ) {
                    fetchedOrders.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchOrderSucces(fetchedOrders));
            } )
            .catch( err => {
                dispatch(fetchOrderFail(err));
            } );
    };
};