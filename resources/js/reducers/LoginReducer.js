import {
    LOGIN_ON_CHANGE_FIELD,
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_ERROR
} from '../actions/LoginActions'

const initialState = {
    error: null,
    isLoading: false,
    email: '',
    password: '',
    isLogged: !!window.localStorage.getItem('token')
};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_ON_CHANGE_FIELD:
            return {...state, [action.name]: action.value};

        case GET_LOGIN_REQUEST:
            return {...state, isLoading: true};

        case GET_LOGIN_SUCCESS:
            return {...state, list: action.payload, isLoading: false, isLogged: true};

        case GET_LOGIN_ERROR:
            return {...state, error: action.payload, isLoading: false, isLogged: false};

        default:
            return state
    }
}
