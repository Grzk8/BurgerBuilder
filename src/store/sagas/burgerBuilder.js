import axios from 'axios';
import {put} from 'redux-saga/effects';
import * as actions from '../actions';

export function* initIngredientsSaga(action) {
    try {
        const response = yield axios.get('https://burgerbuilder-166a2.firebaseio.com/ingredients.json');
        yield put(actions.setIngrenients(response.data))
    }catch (error) {
        yield put(actions.fetchIngredientsFailed());
    };
};