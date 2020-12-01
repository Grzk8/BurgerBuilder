import * as actionTypes from '../actions/actionTypes';

const initialStore = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const ingrednient_prices = {
    salad: 0.4,
    cheese: 0.5,
    meat: 1.3,
    bacon: 0.7
}

const reducer = (state = initialStore, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + ingrednient_prices[action.ingredientName],
                building: true

            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - ingrednient_prices[action.ingredientName],
                building: true

            };
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                error: false,
                totalPrice: 4,
                building: false
            };
        case actionTypes.FETCH_INGRENIENTS_FAILED:
            return {
                ...state,
                error: true
            }        
        default:
            return state;
    };  
};

export default reducer;