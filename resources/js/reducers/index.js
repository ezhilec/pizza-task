import {combineReducers} from 'redux'
import {productsReducer} from './products'
import {userReducer} from './user'

export const rootReducer = combineReducers({
    page: productsReducer,
    user: userReducer,
})
