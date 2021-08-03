import { LOG_IN, LOG_OUT, SIGN_UP } from "../ActionTypes";

export const logIn=(currentUser)=>({
    type: LOG_IN,
    payload: currentUser
});

export const logOut = () => ({
    type: LOG_OUT
});

export const signUp = (payload) => ({
    type: SIGN_UP,
    payload
});