import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from "../../Saga/Saga";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "flipkartClone",
    storage,
}
const sagaMiddleware=createSagaMiddleware();

const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composedEnhancer);

sagaMiddleware.run(watcherSaga);

export const persistor = persistStore(store);