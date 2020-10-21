import axios from 'axios';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_SUCCESS';

export const getProducts = () => async dispatch => {
    dispatch({
        type: GET_PRODUCTS_REQUEST
    });

    try {
        const response = await axios.get('api/v1/products');

        if (response.data.status === 'ok') {
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: response.data.data
            });
        } else {
            dispatch({
                type: GET_PRODUCTS_ERROR,
                payload: response.data.error
            });
        }

    } catch (e) {
        dispatch({
            type: GET_PRODUCTS_ERROR,
            payload: e,
        });
    }


};
