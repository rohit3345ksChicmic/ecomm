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
        case "users/loggedIn":
            return {
                ...state,
                currentUser: action.payload,
                isLoggedIn: true
            }
        case "users/loggedOut":
            return {
                ...state,
                currentUser: {},
                isLoggedIn: false
            }
        default:
            return state;
    }
}