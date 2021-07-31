import { GET_PRODUCTS, GET_PRODUCT } from "../ActionTypes";

export const getProducts = () => ({
    type: GET_PRODUCTS
});


export const getProduct = (productID) => {
    console.log("getProduct ran");
    return {
        type: GET_PRODUCT,
        payload: productID
    }
};