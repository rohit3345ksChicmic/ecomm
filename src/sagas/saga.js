import {takeEvery} from 'redux-saga/effects';
import {LOAD_PRODUCT,LOAD_SELECTED_PRODUCT} from '../redux/actionTypes/productActionTypes';
import {handleProductsFetch,handleSelectedProductFetch} from './handlers/productLoadHandler';
export function* watcherSaga(){
    yield takeEvery(LOAD_PRODUCT,handleProductsFetch);
    yield takeEvery(LOAD_SELECTED_PRODUCT,handleSelectedProductFetch);
}