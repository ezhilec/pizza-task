import axios from 'axios';

export const GET_REGISTRATION_REQUEST = 'GET_REGISTRATION_REQUEST';
export const GET_REGISTRATION_SUCCESS = 'GET_REGISTRATION_SUCCESS';
export const GET_REGISTRATION_ERROR = 'GET_REGISTRATION_ERROR';

export const GET_PASSWORD_REQUEST = 'GET_PASSWORD_REQUEST';
export const GET_PASSWORD_SUCCESS = 'GET_PASSWORD_SUCCESS';
export const GET_PASSWORD_ERROR = 'GET_PASSWORD_ERROR';

export const GET_LOGOUT_REQUEST = 'GET_LOGOUT_REQUEST';
export const GET_LOGOUT_SUCCESS = 'GETLOGOUT_SUCCESS';

export const submitRegistration = (name, login, password) => async dispatch => {
    dispatch({
        type: GET_REGISTRATION_REQUEST
    });

    try {
        const response = await axios.get('/api/v1/registration/');
        if (response.data.status === 'ok') {
            dispatch({
                type: GET_REGISTRATION_SUCCESS,
                payload: response.data.data
            });
        } else {
            dispatch({
                type: GET_REGISTRATION_ERROR,
                payload: response.data.data.error
            });
        }

    } catch (e) {
        dispatch({
            type: GET_REGISTRATION_ERROR,
            payload: e,
        });
    }
};

export const submitPasswordRecovery = (email) => async dispatch => {
    dispatch({
        type: GET_PASSWORD_REQUEST
    });

    try {
        const response = await axios.get('/api/v1/password_recovery/');

        if (response.data.status === 'ok') {
            dispatch({
                type: GET_PASSWORD_SUCCESS,
                payload: response.data.data
            });
        } else {
            dispatch({
                type: GET_PASSWORD_ERROR,
                payload: response.data.data.error
            });
        }

    } catch (e) {
        dispatch({
            type: GET_PASSWORD_ERROR,
            payload: 'Server error'
        });
    }
};

export const submitLogout = (payload) => async dispatch => {
    dispatch({
        type: GET_LOGOUT_REQUEST
    });

    const response = await axios.get('/api/v1/logout/');

    dispatch({
        type: GET_LOGOUT_SUCCESS
    });

};

