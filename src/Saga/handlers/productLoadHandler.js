import { call, put } from 'redux-saga/effects';
import { startLoader, stopLoader, setProducts, setProduct } from '../../reduxxx/Actions';

const headers = {
    "x-rapidapi-key":
        "86bf102802msh4e6e648847fb57bp1a475bjsnb4c1de75cc9c",
    "x-rapidapi-host": "asos2.p.rapidapi.com",
}
const fetchObj = {
    method: "GET",
    headers
}

export function* handleProductsFetch() {
    try {
        let products = [];
        yield put(startLoader());
        let response = yield call(fetchProducts);
        let data = yield response.json();
        products = data.products.map((product) => {
            let {
                id,
                name,
                imageUrl,
                price: {
                    current: { value },
                },
            } = product;
            let obj = {
                id,
                name,
                imageUrl,
                value,
            };
            return obj;
        });
        yield put(setProducts(products));
        yield put(stopLoader());
    }
    catch (error) {
        console.log(error);
        yield put(stopLoader());
    }
}

export function* handleSelectedProductFetch(action) {

    try {
        yield put(startLoader());
        let response = yield call(fetchSelectedProduct, action.payload);
        let data = yield response.json();
        let {
            id,
            name,
            description,
            price: {
                current: { value },
            },
        } = data;
        let brandName = data.brand.name;
        let imageUrl = data.media.images[0].url;
        let price = value;
        let isInCart = false;
        //   if(this.state.cartItems.length) {
        //     if(this.state.cartItems.some((cartItem)=>cartItem.id===id)){
        //       isInCart=true;
        //     }
        //   }
        let tempSelectedProduct = {
            id,
            name,
            description,
            brandName,
            imageUrl,
            price,
            isInCart
        };
        yield put(setProduct(tempSelectedProduct));
        yield put(stopLoader());
    }
    catch (error) {
        console.log(error);
        yield put(stopLoader());
    }

}




function fetchProducts() {
    return fetch(
        "https://asos2.p.rapidapi.com/products/v2/list?offset=0&categoryId=8199&limit=48&store=US&country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US", fetchObj);
}


function fetchSelectedProduct(productID) {
    return fetch(
        "https://asos2.p.rapidapi.com/products/v3/detail?id=" +
        productID +
        "&store=US&sizeSchema=US&lang=en-US&currency=USD", fetchObj);
}