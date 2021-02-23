import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false,
        loading: false,
      };

    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true,
        purchased: false,
      };

    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.id,
      };
      return {
        ...state,
        orders: state.orders.concat(newOrder),
        purchased: true,
        loading: false,
      };

    case actionTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        loading: false,
      };
    case actionTypes.FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
