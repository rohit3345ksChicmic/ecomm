import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY } from '../ActionTypes';

export default function cartReducer(state={},action){
    switch(action.type){
        case ADD_TO_CART: 
            return {
                ...state,
                cart: {...state.cart, [action.payload.userId]: [...state.cart[action.payload.user],{...action.payload.product,isInCart: true}]}
            }
        default:
            return state;
    }
}