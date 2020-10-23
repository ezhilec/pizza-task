import axios from 'axios';
import {checkAuthResponse} from "../helpers/auth";

export const GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_ERROR = 'GET_ORDERS_ERROR';

export const getOrders = (payload) => async dispatch => {
    dispatch({
        type: GET_ORDERS_REQUEST
    });

    try {
        const response = await axios.get('/api/v1/orders');

        if (response.data.status === 'ok') {
            dispatch({
                type: GET_ORDERS_SUCCESS,
                payload: response.data.data
            });

        } else {
            dispatch({
                type: GET_ORDERS_ERROR,
                payload: response.data.data.error
            });
        }

    } catch (e) {
        checkAuthResponse(e.response.data);
        dispatch({
            type: GET_ORDERS_ERROR,
            payload: 'Server error'
        });
    }
};
