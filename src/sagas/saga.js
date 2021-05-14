import {takeLatest} from 'redux-saga/effects';
import {LOAD_PRODUCT} from '../redux/actionTypes/productActionTypes';
import {handleProductFetch} from './handlers/productLoadHandler';
export function* watcherSaga(){
    yield takeLatest(LOAD_PRODUCT,handleProductFetch)
}