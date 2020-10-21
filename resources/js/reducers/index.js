import {combineReducers} from 'redux';
import {productsReducer} from './ProductsReducer';
import {userReducer} from './UserReducer';
import {cartReducer} from './CartReducer';
import {loginReducer} from './LoginReducer';
import {currencyReducer} from './CurrencyReducer';

export const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    user: userReducer,
    loginForm: loginReducer,
    currency: currencyReducer,
})
