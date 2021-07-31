import CartReducer from './cartReducer';
import ProductReducer from './productReducer';
import UserReducer from './userReducer';
import commonReducer from './commonReducer';
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
//     common: {
//         laoding: false
//     }
// }


const RootReducer=combineReducers({
    cart: CartReducer,
    product: ProductReducer,
    user: UserReducer,
    common: commonReducer
});

export default RootReducer;