import axios from 'axios';
import {put} from 'redux-saga/effects';
import * as actions from '../actions';

export function* purchaseBurgerSaga(action) {
    yield put(actions.purchaseBurgerStart() );
    try {
        const response = yield axios.post( 'https://burgerbuilder-166a2.firebaseio.com/orders.json?auth=' + action.token, action.orderData );
        yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
    }catch (error) {
        yield put(actions.purchaseBurgerFail(error));
    };
};

export function* fetchOrdersSaga(action) {
    yield put(actions.fetchOrderStart());
    const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
    try {
        const response = yield axios.get( 'https://burgerbuilder-166a2.firebaseio.com/orders.json?auth=' + queryParams );
        const fetchedOrders = [];
            for ( let key in response.data ) {
                fetchedOrders.push( {
                    ...response.data[key],
                    id: key
                } );
            }
        yield put(actions.fetchOrderSucces(fetchedOrders));  
    }catch (error) {
        yield put(actions.fetchOrderFail(error));
    };
};