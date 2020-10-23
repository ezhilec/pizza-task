import {
    UPDATE_USER_ON_CHANGE_FIELD,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR
} from '../actions/UserActions'

const initialState = {
    error: null,
    isLoading: false,
    email: '',
    address: '',
    surname: '',
    name: '',
    phone: '',
    deliveryType: ''
};

export function userReducer(state = initialState, action) {
    switch (action.type) {

        case GET_USER_REQUEST:
            return {...state, error: null, isLoading: true};

        case GET_USER_SUCCESS:
            return {...state, ...action.payload, isLoading: false, isLogged: true};

        case GET_USER_ERROR:
            return {...state, error: action.payload, isLoading: false, isLogged: false};

        case UPDATE_USER_ON_CHANGE_FIELD:
            return {...state, [action.name]: action.value};

        case UPDATE_USER_REQUEST:
            return {...state, error: null, isLoading: true};

        case UPDATE_USER_SUCCESS:
            return {...state, isLoading: false, isLogged: true};

        case UPDATE_USER_ERROR:
            return {...state, error: action.payload, isLoading: false, isLogged: false};

        default:
            return state
    }
}
