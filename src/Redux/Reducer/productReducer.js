import { SET_PRODUCTS, SET_PRODUCT } from "../ActionTypes";

const initialState={
    products: [],
    selectedProduct: {}
}
export default function productReducer(state=initialState,action){
    
    switch(action.type){
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SET_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload
            }
        default:
            return state;
    }
}