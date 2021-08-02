import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY } from '../ActionTypes';

export default function cartReducer(state={},action){
    switch(action.type){
        case ADD_TO_CART: 
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.payload.userEmail]: [...(state.cart?.[action.payload.userEmail] ?? []), {...action.payload.product,quantity: 1}]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.payload.userEmail]: (state.cart?.[action.payload.userEmail] ?? []).filter(cartItem=>cartItem.id!==action.payload.productId)
                }
            }
        default:
            return state;
    }
}