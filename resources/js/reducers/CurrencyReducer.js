import {
    GET_CURRENCIES_REQUEST,
    GET_CURRENCIES_ERROR,
    GET_CURRENCIES_SUCCESS,
    SET_CURRENT_CURRENCY
} from "../actions/CurrencyActions";

const initialState = {
    isLoading: false,
    error: null,
    list: [
        {
            name: 'Dollar',
            slug: 'usd',
            is_default: true
        },
        {
            name: 'Euro',
            slug: 'eur',
            is_default: false,
            rate: 1.17
        }
    ],
    currentCurrency: null
}

export function currencyReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCIES_SUCCESS:
            return {...state, list: action.payload, isLoading: false};
        case GET_CURRENCIES_ERROR:
            return {...state, error: action.payload, isLoading: false};
        case GET_CURRENCIES_REQUEST:
            return {...state, isLoading: true};

        case SET_CURRENT_CURRENCY:
            return {...state, currentCurrency: action.slug};
        default:
            return state
    }
}
