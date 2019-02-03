import {combineReducers} from 'redux';

import {menuReducer, entityReducer} from './menu'
import {cartReducer} from './shopingCart';
import {authReducer} from './auth'


const rootReducer = combineReducers({
    menu: menuReducer,
    shopingCart:cartReducer,
    entity: entityReducer,
    auth: authReducer
})

export default rootReducer;
