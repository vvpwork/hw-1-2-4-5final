import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducers from '../modules/rootReducer';

const middleware = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middleware);

const store = createStore(rootReducers, enhancer);
const persistor = persistStore(store);

export default { store, persistor };
