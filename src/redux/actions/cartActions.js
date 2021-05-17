import {CART_LOADED} from '../actionTypes/cartActionTypes';

export const loadCart=(cartItems)=>({
    type: CART_LOADED,
    payload: cartItems
});