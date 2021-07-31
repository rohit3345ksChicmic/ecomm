import { call } from 'redux-saga/effects';
import { SET_PRODUCTS, SET_PRODUCT } from '../../Redux/ActionTypes';
import { store } from '../../Redux/Store/store';

export function* handleProductsFetch() {
    console.log("handleProductsFetch is running");
    try {
        let products = [];
        let response = yield call(fetchProducts);
        response && console.log("response received");
    response.json().then((data) => {
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
            store.dispatch({
                type: SET_PRODUCTS,
                payload: products
            })
        });
    }
    catch (error) {
        console.log(error);
    }
}

export function* handleSelectedProductFetch(action) {
    console.log('handleSelectedProductFetch running');
    try {
        let response = yield call(fetchSelectedProduct, action.payload);
        response.json().then((data) => {
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
            store.dispatch({
                type: SET_PRODUCT,
                payload: tempSelectedProduct
            })
        })
    }
    catch (error) {
        console.log(error);
    }

}




function fetchProducts() {
    return fetch(
        "https://asos2.p.rapidapi.com/products/v2/list?offset=0&categoryId=8199&limit=48&store=US&country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US",
        {
            method: "GET",
            headers: {
                "x-rapidapi-key":
                    "86bf102802msh4e6e648847fb57bp1a475bjsnb4c1de75cc9c",
                "x-rapidapi-host": "asos2.p.rapidapi.com",
            },
        }
    );
}


function fetchSelectedProduct(productID) {
    console.log('fetchSelectedProduct ran');
    return fetch(
        "https://asos2.p.rapidapi.com/products/v3/detail?id=" +
        productID +
        "&store=US&sizeSchema=US&lang=en-US&currency=USD",
        {
            method: "GET",
            headers: {
                "x-rapidapi-key":
                    "86bf102802msh4e6e648847fb57bp1a475bjsnb4c1de75cc9c",
                "x-rapidapi-host": "asos2.p.rapidapi.com",
            },
        }
    );
}