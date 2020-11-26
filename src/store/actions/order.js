import * as actionsType from './actionTypes';

export const purchaseBurgerSucces = (id, orderData) => {
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

export const purchaseBurger = (orderData) => {
    let response = null;
    return dispatch => {
        dispatch(purchaseBurgerStart());
        fetch('https://burgerbuilder-166a2.firebaseio.com/orders.json',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              }, 
            body: JSON.stringify({orderData})})
        .then(resp => resp.json())
        .then(resp => 
            response = resp,
            console.log(response),
            dispatch(purchaseBurgerSucces(response, orderData)))
        .catch(error => 
        dispatch(purchaseBurgerFail(error)));
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

export const fetchOrders = (token) => {
    return dispatch => {
        dispatch(fetchOrderStart());
        fetch('https://burgerbuilder-166a2.firebaseio.com/orders.json?auth=' + token)
        .then(response => response.json())
        .then (resp => {
            console.log(resp)
            const fetchedOrders = [];
            for (let key in resp) {
                fetchedOrders.push({
                    ...resp[key], id: key
                });
            };
            dispatch(fetchOrderSucces(fetchedOrders));
        })
        .catch(err => {
            dispatch(fetchOrderFail(err));
        });
    };
};