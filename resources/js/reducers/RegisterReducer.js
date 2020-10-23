import {
    REGISTER_USER_ON_CHANGE_FIELD,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR
} from '../actions/RegisterActions'

const initialState = {
    error: null,
    isLoading: false,
    email: '',
    password: '',
    password_confirmation: '',
    name: '',
    phone: ''
};

export function registerReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER_ON_CHANGE_FIELD:
            return {...state, [action.name]: action.value};

        case REGISTER_USER_REQUEST:
            return {...state, error: null, isLoading: true};

        case REGISTER_USER_SUCCESS:
            return {...state, isLoading: false, isLogged: true};

        case REGISTER_USER_ERROR:
            return {...state, error: action.payload, isLoading: false, isLogged: false};

        default:
            return state
    }
}
