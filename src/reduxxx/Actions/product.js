import { GET_PRODUCTS, GET_PRODUCT, SET_PRODUCTS, SET_PRODUCT } from "../ActionTypes";

export const getProducts = () => ({
    type: GET_PRODUCTS
});


export const getProduct = (productID) => {
    return {
        type: GET_PRODUCT,
        payload: productID
    }
};

export const setProducts = (payload) => ({
    type: SET_PRODUCTS,
    payload
});

export const setProduct = (payload) => ({
    type: SET_PRODUCT,
    payload
});