import {CART_LOADED} from '../ActionTypes/cart';

export const loadCart=(cartItems)=>({
    type: CART_LOADED,
    payload: cartItems
});