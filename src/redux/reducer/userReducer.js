import * as userActionTypes from '../ActionTypes/user';
export default function userReducer(state={
    users: [],
    currentUser: {},
    isLoggedIn: false                               
},action){
    switch(action.type){
        case "users/registerd":
            return {
                ...state,
                users: [...state.users,action.payload]
            }
        case userActionTypes.USER_LOGGED_IN:
            return {
                ...state,
                currentUser: action.payload,
                isLoggedIn: true
            }
        case userActionTypes.USER_LOGGED_OUT:
            return {
                ...state,
                currentUser: {},
                isLoggedIn: false
            }
        default:
            return state;
    }
}