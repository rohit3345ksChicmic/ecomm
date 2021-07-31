import * as userActionTypes from '../ActionTypes/user';

export const logUserIn=(currentUser)=>({
    type: userActionTypes.USER_LOGGED_IN,
    payload: currentUser
});

export const logUserOut=()=>({
    type: userActionTypes.USER_LOGGED_OUT
})