import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { menuReducer, entityReducer } from './menu';
import { cartReducer } from './shopingCart';
import { authReducer } from './auth';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  menu: menuReducer,
  shopingCart: cartReducer,
  entity: entityReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
