import {
    ORDER_ON_CHANGE_FIELD,
    SUBMIT_ORDER_REQUEST,
    SUBMIT_ORDER_SUCCESS,
    SUBMIT_ORDER_ERROR
} from '../actions/OrderActions'

const initialState = {
    error: null,
    isLoading: false,
    email: '',
    address: '',
    surname: '',
    name: '',
    phone: '',
    deliveryType: '',
    orderId: null
};

export function orderReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case ORDER_ON_CHANGE_FIELD:
            return {...state, [action.name]: action.value};

        case SUBMIT_ORDER_REQUEST:
            return {...state, error: null, isLoading: true};

        case SUBMIT_ORDER_SUCCESS:
            return {...state, orderId: action.payload, isLoading: false, isLogged: true};

        case SUBMIT_ORDER_ERROR:
            return {...state, error: action.payload, isLoading: false, isLogged: false};

        default:
            return state
    }
}
