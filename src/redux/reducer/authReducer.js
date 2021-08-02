import { LOG_IN, LOG_OUT, SIGN_UP } from "../ActionTypes";

const initialState = {
    users: [],
    currentUser: {},
    isLoggedIn: false
}
export default function userReducer(state = initialState,action){
    switch(action.type){
        case SIGN_UP:
            return {
                ...state,
                users: [...state.users,action.payload]
            }
        case LOG_IN:
            return {
                ...state,
                currentUser: action.payload,
                isLoggedIn: true
            }
        case LOG_OUT:
            return {
                ...state,
                currentUser: {},
                isLoggedIn: false
            }
        default:
            return state;
    }
}