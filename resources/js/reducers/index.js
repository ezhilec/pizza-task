import {combineReducers} from 'redux';
import {productsReducer} from './ProductsReducer';
import {userReducer} from './UserReducer';
import {cartReducer} from './CartReducer';
import {loginReducer} from './LoginReducer';
import {registerReducer} from './RegisterReducer';
import {currencyReducer} from './CurrencyReducer';
import {deliveryTypesReducer} from './DeliveryTypesReducer';
import {orderReducer} from './OrderReducer';
import {ordersHistoryReducer} from "./OrdersHistoryReducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    user: userReducer,
    loginForm: loginReducer,
    registerForm: registerReducer,
    currency: currencyReducer,
    deliveryTypes: deliveryTypesReducer,
    orderForm: orderReducer,
    orders: ordersHistoryReducer,
})
