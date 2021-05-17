import * as ProductActionTypes from '../actionTypes/productActionTypes';

export const loadProduct = () => ({
    type: ProductActionTypes.LOAD_PRODUCT
});


export const loadSelectedProduct = (productID) => {
    console.log("loadSelectedProduct ran");
    return {
        type: ProductActionTypes.LOAD_SELECTED_PRODUCT,
        payload: productID
    }
};