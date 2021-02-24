import * as actionTypes from "./actionsTypes";
import axios from "axios";
import firebase from "../../firebase";

const SIGN_UP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebase.apiKey}`;
const SIGN_IN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebase.apiKey}`;

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId,
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(isSignup ? SIGN_UP : SIGN_IN, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((error) => {
        console.log(error);
        dispatch(authFail(error.response.data.error));
      });
  };
};
