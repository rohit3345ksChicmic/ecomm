export default function cartReducer(state=[],action){
    switch(action.type){
        case "cart/productAdded":
            return {
                ...state,
                cartItems: [...state.cartItems,action.payload]
            }
        default:
            return state;
    }
}