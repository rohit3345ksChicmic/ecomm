import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY } from '../ActionTypes';

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
};

export const increaseProductQuantity = (payload) => ({
    type: INCREASE_PRODUCT_QUANTITY,
    payload
});

export const decreaseProductQuantity = (payload) => ({
    type: DECREASE_PRODUCT_QUANTITY,
    payload
});