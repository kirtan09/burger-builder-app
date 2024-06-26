import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  isAuthenticated: false,
  userId: null,
  token: null,
  error: null,
  loading: false,
  authRedirectPath: null,
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    isAuthenticated: false,
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    userId: action.userId,
    token: action.token,
    isAuthenticated: true,
    loading: false,
    error: null,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    token: null,
    isAuthenticated: false,
    loading: false,
    error: action.error,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    userId: null,
    isAuthenticated: false,
    token: null,
  });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);

    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);

    case actionTypes.AUTH_FAIL:
      return authFail(state, action);

    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);

    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
