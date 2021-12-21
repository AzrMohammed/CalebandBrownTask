import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import appReducer from '../reducers';
import {rootSaga} from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  timeout: 0,
  key: 'root',
  storage: AsyncStorage,
  Whitelist: ['AppBasicReducer'],
  blacklist: ['CoinListReducer'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export {store, persistor};
