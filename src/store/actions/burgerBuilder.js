import * as actionTypes from './actionTypes';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngrenients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGRENIENTS_FAILED
    }
}
export const initIngredients = () => {
    return dispatch => {
        fetch('http://localhost:3000/ingredients')
        .then(response => response.json())
        .then(response => {
            dispatch(setIngrenients(response));
        })
        .catch(error => {
            dispatch(fetchIngredientsFailed());
        });
    };
}