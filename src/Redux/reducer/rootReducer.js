import CartReducer from './cartReducer';
import ProductReducer from './productReducer';
import AuthReducer from './authReducer';
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
    auth: AuthReducer,
    common: commonReducer
});

export default RootReducer;