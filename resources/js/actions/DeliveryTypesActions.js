import axios from 'axios';

export const GET_DELIVERY_TYPES_REQUEST = 'GET_CART_REQUEST';
export const GET_DELIVERY_TYPES_SUCCESS = 'GET_DELIVERY_TYPES_SUCCESS';
export const GET_DELIVERY_TYPES_ERROR = 'GET_DELIVERY_TYPES_ERROR';

export const getDeliveryTypes = (payload) => async dispatch => {
    dispatch({
        type: GET_DELIVERY_TYPES_REQUEST
    });

    try {
        const response = await axios.get('/api/v1/delivery_types');

        if (response.data.status === 'ok') {
            dispatch({
                type: GET_DELIVERY_TYPES_SUCCESS,
                payload: response.data.data
            });
        } else {
            dispatch({
                type: GET_DELIVERY_TYPES_ERROR,
                payload: response.data.data.error
            });
        }

    } catch (e) {
        dispatch({
            type: GET_DELIVERY_TYPES_ERROR,
            payload: 'Server error'
        });
    }
};
