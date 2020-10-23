import axios from 'axios';
import {setCurrentCurrency} from "./CurrencyActions";
import {getCart} from "./CartActions";

export const ORDER_ON_CHANGE_FIELD = 'ON_CHANGE_FIELD';

export const SUBMIT_ORDER_REQUEST = 'SUBMIT_ORDER_REQUEST';
export const SUBMIT_ORDER_SUCCESS = 'SUBMIT_ORDER_SUCCESS';
export const SUBMIT_ORDER_ERROR = 'SUBMIT_ORDER_ERROR';

export const onChangeField = (name, value) => {
    return {
        type: ORDER_ON_CHANGE_FIELD,
        name,
        value
    };
};

export const submitOrder = (data) => async dispatch => {
    const {name, surname, email, phone, address, deliveryType} = data;

    dispatch({
        type: SUBMIT_ORDER_REQUEST
    });

    try {
        const response = await axios.post('/api/v1/orders', {
            name: name,
            surname: surname,
            phone: phone,
            address: address,
            email: email,
            deliveryType: deliveryType,
            currency: window.localStorage.getItem('currency')
        });
console.log(444,response)
        if (response.data.status === 'ok') {
            dispatch({
                type: SUBMIT_ORDER_SUCCESS,
                payload: response.data.data.id
            });

            dispatch(getCart());

        } else {
            dispatch({
                type: SUBMIT_ORDER_ERROR,
                payload: response.data.error
            });
        }

    } catch (e) {
        dispatch({
            type: SUBMIT_ORDER_ERROR,
            payload: 'Server error'
        });
    }
};
