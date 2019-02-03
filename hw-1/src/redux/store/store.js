import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' 
import thunk from 'redux-thunk';

import rootReducers from '../modules/rootReducer';

const middleware = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middleware);

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store)

export default {store, persistor};
