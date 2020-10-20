import {combineReducers} from 'redux';
import {productsReducer} from './productsReducer';
import {userReducer} from './userReducer';
import {cartReducer} from './cartReducer';

export const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    user: userReducer,
})
