import axios from 'axios';

export const LOGIN_ON_CHANGE_FIELD = 'ON_CHANGE_FIELD';

export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_ERROR = 'GET_LOGIN_ERROR';

export const GET_LOGOUT_SUCCESS = 'GET_LOGOUT_SUCCESS';

export const onChangeField = (name, value) => {
    return {
        type: LOGIN_ON_CHANGE_FIELD,
        name,
        value
    };
};

export const submitLogin = (data) => async dispatch => {
    const {email, password} = data;

    dispatch({
        type: GET_LOGIN_REQUEST
    });

    try {
        const response = await axios.post('/api/v1/login/', {
            email,
            password
        });

        if (response.data.access_token) {
            const token = response.data.access_token;
            window.localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

            dispatch({
                type: GET_LOGIN_SUCCESS,
                payload: response.data.data
            });
        } else {
            dispatch({
                type: GET_LOGIN_ERROR,
                payload: response.data.error
            });
        }

    } catch (e) {
        dispatch({
            type: GET_LOGIN_ERROR,
            payload: 'Server error'
        });
    }
};

export const submitLogout = (data) => async dispatch => {

    try {
        const response = await axios.post('/api/v1/logout');
    } catch (e) {

    }

    window.localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = '';

    dispatch({
        type: GET_LOGOUT_SUCCESS
    });

};
