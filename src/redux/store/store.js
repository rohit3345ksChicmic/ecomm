import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducer/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from '../../sagas/saga';
const sagaMiddleware=createSagaMiddleware();


const composedEnhancer=composeWithDevTools(applyMiddleware(sagaMiddleware));
const store=createStore(rootReducer,composedEnhancer);

sagaMiddleware.run(watcherSaga);

export default store;