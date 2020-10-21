import {
    GET_CART_ERROR,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    UPDATE_CART_ERROR,
    UPDATE_CART_REQUEST,
    UPDATE_CART_SUCCESS
} from "../actions/CartActions";

const initialState = {
    error: null,
    isLoading: false,
    list: [
        {
            product: {
                id: 1,
                name: 'test pizza'
            },
            amount: 1,
            price: 100,
            currency: 'usd'
        },

    ],
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CART_REQUEST:
            return {...state, isLoading: true};

        case GET_CART_SUCCESS:
            return {...state, list: action.payload, isLoading: false};

        case GET_CART_ERROR:
            return {...state, error: action.payload, isLoading: false};
        case UPDATE_CART_REQUEST:
            return {...state, isLoading: true};

        case UPDATE_CART_SUCCESS:
            return {...state, list: action.payload, isLoading: false};

        case UPDATE_CART_ERROR:
            return {...state, error: action.payload, isLoading: false};

        default:
            return state
    }
}
