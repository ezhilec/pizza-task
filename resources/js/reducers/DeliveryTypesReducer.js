import {
    GET_DELIVERY_TYPES_REQUEST,
    GET_DELIVERY_TYPES_ERROR,
    GET_DELIVERY_TYPES_SUCCESS
} from "../actions/DeliveryTypesActions";

const initialState = {
    isLoading: false,
    error: null,
    list: []
}

export function deliveryTypesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DELIVERY_TYPES_SUCCESS:
            return {...state, list: action.payload, isLoading: false};
        case GET_DELIVERY_TYPES_ERROR:
            return {...state, error: action.payload, isLoading: false};
        case GET_DELIVERY_TYPES_REQUEST:
            return {...state, isLoading: true};
        default:
            return state
    }
}
