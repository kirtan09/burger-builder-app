import * as actionTypes from "./actionsTypes";
import axios from "../../axios-orders";

export const addIngredient = (igName) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: igName,
  };
};

export const removeIngredient = (igName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: igName,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get(
        "https://burger-builder-k09-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(setIngredientsFailed(error));
      });
  };
};

const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

const setIngredientsFailed = (error) => {
  return {
    type: actionTypes.SET_INGREDIENTS_FAILED,
    error: error,
  };
};
