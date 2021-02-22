import * as actionTypes from "./actionsTypes";

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
