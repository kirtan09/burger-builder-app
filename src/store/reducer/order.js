import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state, action) => {
  return updateObject(state, {
    purchased: false,
    loading: false,
  });
};

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, {
    loading: false,
  });
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, {
    id: action.id,
  });
  return updateObject(state, {
    orders: state.orders.concat(newOrder),
    purchased: true,
    loading: false,
  });
};

const purchaseBurgerFail = (state, action) => {
  return updateObject(state, {
    loading: false,
  });
};

const fetchOrdersStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false,
  });
};

const fetchOrdersFail = (state, action) => {
  return updateObject(state, {
    loading: false,
  });
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);

    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);

    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);

    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);

    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);

    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);

    default:
      return {
        ...state,
      };
  }
};

export default reducer;