import {combineReducers} from 'redux';
import {productsReducer} from './products';
import {userReducer} from './user';

export const rootReducer = combineReducers({
    products: productsReducer,
    user: userReducer,
})
