import axios from 'axios';

export const GET_CURRENCIES_REQUEST = 'GET_CART_REQUEST';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

export const getCurrencies = (payload) => async dispatch => {
    dispatch({
        type: GET_CURRENCIES_REQUEST
    });

    try {
        const response = await axios.get('api/v1/currencies');

        if (response.data.status === 'ok') {
            dispatch({
                type: GET_CURRENCIES_SUCCESS,
                payload: response.data.data
            });
        } else {
            dispatch({
                type: GET_CURRENCIES_ERROR,
                payload: response.data.data.error
            });
        }

    } catch (e) {
        dispatch({
            type: GET_CURRENCIES_ERROR,
            payload: e,
        });
    }
};
