import CartReducer from './cartReducer';
import ProductReducer from './productReducer';
import UserReducer from './userReducer';
import {combineReducers} from 'redux';

// const initialStore={
//     cart: [],
//     product: {
//         products: [{}],
//         selectedProduct: {},
//     },
//     user: {
//         currentUser: {},
//         users: [],
//         isLoggedIn: false
//     }
// }


const RootReducer=combineReducers({
    cart: CartReducer,
    product: ProductReducer,
    user: UserReducer
});

export default RootReducer;