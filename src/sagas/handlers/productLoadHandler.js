import {call} from 'redux-saga/effects';
import {LOADED_PRODUCT} from '../../redux/actionTypes/productActionTypes';
import store from '../../redux/store/store';
export function* handleProductFetch(){
    try{
        let products=[];
        let response=yield call(fetchProducts);
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
                type: LOADED_PRODUCT,
                payload: products
            })
        });
    }
    catch(error){

    }
}

function fetchProducts() {
    return fetch(
        "https://asos2.p.rapidapi.com/products/v2/list?offset=0&categoryId=8199&limit=48&store=US&country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US",
        {
            method: "GET",
            headers: {
                "x-rapidapi-key":
                    "625eabae30msh7331e06a5d6ef78p114934jsnc72d6b398fb8",
                "x-rapidapi-host": "asos2.p.rapidapi.com",
            },
        }
    );
}

