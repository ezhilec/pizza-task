import {
    GET_ORDERS_ERROR,
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS
} from "../actions/OrdersHistoryActions";

const initialState = {
    isLoading: false,
    error: null,
    list: [],
};

export function ordersHistoryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS_REQUEST:
            return {...state, error: null, isLoading: true};

        case GET_ORDERS_SUCCESS:
            return {...state, list: action.payload, isLoading: false};

        case GET_ORDERS_ERROR:
            return {...state, error: action.payload, isLoading: false};

        default:
            return state
    }
}
