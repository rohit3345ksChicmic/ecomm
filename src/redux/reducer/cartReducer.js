import {CART_LOADED} from '../actionTypes/cartActionTypes';
export default function cartReducer(state=[],action){
    switch(action.type){
        case CART_LOADED: 
            return {
                ...state,
                cart: action.payload
            }
        case "cart/productAdded":
            return {
                ...state,
                cartItems: [...state.cartItems,action.payload]
            }
        default:
            return state;
    }
}