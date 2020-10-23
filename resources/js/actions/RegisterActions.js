import axios from 'axios';
import {GET_LOGIN_SUCCESS} from './LoginActions'

export const REGISTER_USER_ON_CHANGE_FIELD = 'ON_CHANGE_FIELD';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const onChangeField = (name, value) => {
    return {
        type: REGISTER_USER_ON_CHANGE_FIELD,
        name,
        value
    };
};

export const submitRegister = (data) => async dispatch => {
    const {name, phone, email, password, password_confirmation} = data;

    dispatch({
        type: REGISTER_USER_REQUEST
    });

    try {
        const response = await axios.post('/api/v1/register', {
            name: name,
            phone: phone,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            currency: window.localStorage.getItem('currency')
        });

        if (response.data.access_token) {
            const token = response.data.access_token;
            window.localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: response.data.data
            });

            dispatch({
                type: GET_LOGIN_SUCCESS,
                payload: response.data.data
            });
        } else {
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: response.data.error
            });
        }

    } catch (e) {
        dispatch({
            type: REGISTER_USER_ERROR,
            payload: 'Server error'
        });
    }
};
