import axios from 'axios';
import {checkAuthResponse} from "../helpers/auth";

export const UPDATE_USER_ON_CHANGE_FIELD = 'UPDATE_USER_ON_CHANGE_FIELD';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

export const onChangeField = (name, value) => {
    return {
        type: UPDATE_USER_ON_CHANGE_FIELD,
        name,
        value
    };
};

export const getUser = (payload) => async dispatch => {
    dispatch({
        type: GET_USER_REQUEST
    });

    try {
        const response = await axios.get('/api/v1/user');

        if (response.data.status === 'ok') {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: response.data.data
            });
        } else {
            dispatch({
                type: GET_USER_ERROR,
                payload: response.data.data.error
            });
        }

    } catch (e) {
        checkAuthResponse(e.response.data);
        dispatch({
            type: GET_USER_ERROR,
            payload: 'Server error'
        });
    }
};

export const updateUser = (data) => async dispatch => {
    const {name, surname, email, phone, address, deliveryType} = data;

    dispatch({
        type: UPDATE_USER_REQUEST
    });

    try {
        const response = await axios.put('/api/v1/user', {
            name: name,
            surname: surname,
            phone: phone,
            address: address,
            email: email,
            deliveryType: deliveryType,
            currency: window.localStorage.getItem('currency')
        });

        if (response.data.status === 'ok') {
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: response.data.data
            });

        } else {
            dispatch({
                type: UPDATE_USER_ERROR,
                payload: response.data.error
            });
        }

    } catch (e) {
        checkAuthResponse(e.response.data);
        dispatch({
            type: UPDATE_USER_ERROR,
            payload: 'Server error'
        });
    }
};
