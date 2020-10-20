import axios from 'axios';

export const GET_CART_REQUEST = 'GET_CART_REQUEST';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_ERROR = 'GET_CART_ERROR';
export const UPDATE_CART_REQUEST = 'UPDATE_CART_REQUEST';
export const UPDATE_CART_SUCCESS = 'UPDATE_CART_SUCCESS';
export const UPDATE_CART_ERROR = 'UPDATE_CART_ERROR';

export const getCart = (payload) => async dispatch => {
    dispatch({
        type: GET_CART_REQUEST
    });

    try {
        const response = await axios.get('api/v1/cart/');

        if (response.data.status === 'ok') {
            dispatch({
                type: GET_CART_SUCCESS,
                payload: response.data.data
            });
        } else {
            dispatch({
                type: GET_CART_ERROR,
                payload: response.data.data.error
            });
        }

    } catch (e) {
        dispatch({
            type: UPDATE_CART_ERROR,
            payload: e,
        });
    }
};

export const updateCart = (productId, amount) => async dispatch => {

    dispatch({
        type: UPDATE_CART_REQUEST
    });

    try {
        const response = await axios.put(`api/v1/cart/${productId}`, {
            amount: 1
        });

        if (response.data.status === 'ok') {
            dispatch({
                type: UPDATE_CART_SUCCESS,
                payload: response.data.data
            });
        } else {
            dispatch({
                type: UPDATE_CART_ERROR,
                payload: response.data.data.error
            });
        }

    } catch (e) {
        dispatch({
            type: UPDATE_CART_ERROR,
            payload: e,
        });
    }
};
