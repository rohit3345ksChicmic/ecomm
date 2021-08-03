import {takeLatest} from 'redux-saga/effects';
import { GET_PRODUCTS, GET_PRODUCT } from "../reduxxx/ActionTypes";
import { handleProductsFetch, handleSelectedProductFetch } from './handlers/productLoadHandler';

export function* watcherSaga(){
    yield takeLatest(GET_PRODUCTS, handleProductsFetch);
    yield takeLatest(GET_PRODUCT, handleSelectedProductFetch);
}