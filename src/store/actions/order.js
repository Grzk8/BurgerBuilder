import * as actionsType from './actionTypes';

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
    return {
        type: actionsType.PURCHASE_BURGER,
        orderData: orderData,
        token: token
    }

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
    return {
        type: actionsType.FETCH_ORDERS,
        token: token,
        userId: userId
    };
};