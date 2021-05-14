import * as ProductActionTypes from '../actionTypes/productActionTypes';

const initialState={
    products: [],
    selectedProduct: {}
}
export default function productReducer(state=initialState,action){
    
    switch(action.type){
        case ProductActionTypes.LOADED_PRODUCT:
            return {
                ...state,
                products: action.payload
            }

        case "products/productSelected":
            return {
                ...state,
                selectedProduct: action.payload
            }
        default:
            return state;
    }
}