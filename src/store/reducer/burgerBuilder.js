import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    chicken: 0,
    vegPatty: 0,
  },
  totalPrice: 2.5,
};

const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.2,
  chicken: 1,
  vegPatty: 0.75,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };

    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };

    default:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
        },
      };
  }
};

export default reducer;
