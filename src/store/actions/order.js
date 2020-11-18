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
    }
}

export const purchaseBurger = (orderData) => {
    let response = null;
    return dispatch => {
        dispatch(purchaseBurgerStart());
        fetch('http://localhost:3000/orders',{
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
    }
}