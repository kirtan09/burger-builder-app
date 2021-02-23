import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  ingredients: null,
  totalPrice: 2.5,
  error: null,
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
      const updatedIngredientAdd = {
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
      };
      const updatedIngredientsAdd = updateObject(
        state.ingredients,
        updatedIngredientAdd
      );
      const updatedStateAdd = {
        ingredients: updatedIngredientsAdd,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
      return updateObject(state, updatedStateAdd);

    case actionTypes.REMOVE_INGREDIENT:
      const updatedIngredientRem = {
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
      };
      const updatedIngredientsRem = updateObject(
        state.ingredients,
        updatedIngredientRem
      );
      const updatedStateRem = {
        ingredients: updatedIngredientsRem,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
      return updateObject(state, updatedStateRem);

    case actionTypes.SET_INGREDIENTS:
      return updateObject(state, {
        ingredients: action.ingredients,
        totalPrice: 2.5,
        error: null,
      });

    case actionTypes.SET_INGREDIENTS_FAILED:
      return updateObject(state, {
        error: action.error,
      });

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
